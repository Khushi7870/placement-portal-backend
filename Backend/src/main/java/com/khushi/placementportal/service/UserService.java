package com.khushi.placementportal.service;

import com.khushi.placementportal.entity.User;
import com.khushi.placementportal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public String saveUser(User user) {

        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser.isPresent()) {
            return "Email Already Registered";
        }

        userRepository.save(user);

        return "User Registered Successfully";
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public String loginUser(String email, String password) {

        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()) {

            User existingUser = user.get();

            if(existingUser.getPassword().equals(password)) {
                return "Login Successful";
            }
        }

        return "Invalid Email or Password";
    }
}
