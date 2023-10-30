/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.product;

import lombok.NonNull;

/**
 *
 * @author JAIME DIAZ
 */
public record ProductUpdateData(
        @NonNull
        Long id,
        String name,
        String description,
        Long category,
        Float price,
        Long stock,
        String image) {

}
