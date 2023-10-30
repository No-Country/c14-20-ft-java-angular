/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.userEntity;

/**
 *
 * @author JAIME DIAZ
 */
public record UserResponseData(Long id, String name, String email) {

    public UserResponseData(UserEntity user) {
        this(user.getId(), user.getName(), user.getEmail());
    }
    
}
