/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.controller;

import com.no_country.foodTech_delivery.api.domain.userEntity.UserRecordData;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserResponseData;
import com.no_country.foodTech_delivery.api.service.interfaces.IUserService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = {"http://localhost:4200"})
public class UserEntityController {
    
       
    @Autowired
    private IUserService userService;
    
    @PostMapping
    public ResponseEntity<UserResponseData> createUser(@RequestBody @Valid UserRecordData userRecordData, UriComponentsBuilder uriComponentsBuilder){
        return userService.create(userRecordData, uriComponentsBuilder);
    }
    
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();        
    }
    
    
}
