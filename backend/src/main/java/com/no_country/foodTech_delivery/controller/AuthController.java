package com.no_country.foodTech_delivery.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    @PostMapping(value = "login")
    public String login (@RequestBody Login){
        return "login";
    }
    @PostMapping(value = "register")
    public String register (){
        return "register";
    }
}
