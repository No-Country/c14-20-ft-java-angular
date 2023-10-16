package com.no_country.foodTech_delivery.controller;

import com.no_country.foodTech_delivery.model.entity.User;
import com.no_country.foodTech_delivery.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserServiceImpl userService;

    @Autowired
    public UserController(UserServiceImpl userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers() {
        return userService.getAllUsers();
    }
    @GetMapping("/{userId}")
    public Optional<User> getUser(@PathVariable Long userId) {
        return userService.getUserById(userId);
    }
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        System.out.printf(String.valueOf(user));
        return userService.saveUser(user);
    }
}
