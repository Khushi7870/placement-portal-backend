package com.khushi.placementportal.controller;

import com.khushi.placementportal.dto.LoginRequest;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import com.khushi.placementportal.entity.User;
import com.khushi.placementportal.repository.UserRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public String getUsers() {
        return "User Controller Working";
    }

    @PostMapping("/register")
    public String registerUser() {
        return "User Registered";
    }

    @PostMapping("/login")
    public String loginUser(@RequestBody LoginRequest request) {

        String email = request.getEmail();
        String password = request.getPassword();

        return "Login Attempted For : " + email;
    }

    @GetMapping("/test-user")
    public String testUser() {

        return userRepository
                .findByEmail("avi@gmail.com")
                .map(User::getName)
                .orElse("User Not Found");
    }

}
