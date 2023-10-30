/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.service.impl;

import com.no_country.foodTech_delivery.api.domain.userEntity.UserEntity;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserRecordData;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserResponseData;
import com.no_country.foodTech_delivery.api.repositories.UserRepository;
import com.no_country.foodTech_delivery.api.service.interfaces.IUserService;
import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
@Service
public class UserService implements IUserService {

    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private PasswordEncoder PasswordEncoder;
    
    @Override
    public ResponseEntity<UserResponseData> create(UserRecordData userRecordData, UriComponentsBuilder uriComponentsBuilder) {
        String password = PasswordEncoder.encode(userRecordData.password());
        UserEntity user = userRepository.save(new UserEntity(userRecordData, password));
        URI url = uriComponentsBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri();        
        return ResponseEntity.created(url).body(new UserResponseData(user));
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    
}
