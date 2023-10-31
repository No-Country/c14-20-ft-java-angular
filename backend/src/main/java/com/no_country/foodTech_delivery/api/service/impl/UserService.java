/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.service.impl;

import com.no_country.foodTech_delivery.api.domain.userEntity.ERole;
import com.no_country.foodTech_delivery.api.domain.userEntity.RoleEntity;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserEntity;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserRecordData;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserResponseData;
import com.no_country.foodTech_delivery.api.repositories.RoleRepository;
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
    
     @Autowired
    private RoleRepository roleRepository;
    
    @Override
    public ResponseEntity<UserResponseData> create(UserRecordData userRecordData, UriComponentsBuilder uriComponentsBuilder) {
        String password = PasswordEncoder.encode(userRecordData.password());
        RoleEntity role = new RoleEntity();
        role.setName(ERole.USER);
        UserEntity user = userRepository.save(new UserEntity(userRecordData, password, role));
        URI url = uriComponentsBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri();        
        return ResponseEntity.created(url).body(new UserResponseData(user));
    }

    @Override
    public void delete(Long id) {
        userRepository.deleteById(id);
    }
    
}
