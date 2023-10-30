/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.userEntity;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.util.Set;

/**
 *
 * @author JAIME DIAZ
 */
public record UserRecordData(
        @Email 
        @NotBlank
        String email, 
        @NotBlank
        String password,
        @NotBlank
        String name,
        Set<String> roles) {   

}
