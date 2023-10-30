/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.api.service.interfaces;

import com.no_country.foodTech_delivery.api.domain.userEntity.UserRecordData;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserResponseData;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
public interface IUserService {

    public ResponseEntity<UserResponseData> create(UserRecordData userRecordData, UriComponentsBuilder uriComponentsBuilder);

    public void delete(Long id);
    
}
