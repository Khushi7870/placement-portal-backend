package com.khushi.placementportal.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.khushi.placementportal.dto.LoginRequest;
import com.khushi.placementportal.entity.User;
import com.khushi.placementportal.repository.UserRepository;
import com.khushi.placementportal.service.UserService;


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    @GetMapping
    public String getUsers() {
        return "User Controller Working";
    }
    @PostMapping("/register")
         public String registerUser(@RequestBody User user) {

     userService.saveUser(user);

     return "User Registered Successfully";
     }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest request) {

        return userService.loginUser(
                request.getEmail(),
                request.getPassword()
        );
    }

    @GetMapping("/test-user")
    public String testUser() {

        return userRepository
                .findByEmail("avi@gmail.com")
                .map(User::getName)
                .orElse("User Not Found");
    }



}
