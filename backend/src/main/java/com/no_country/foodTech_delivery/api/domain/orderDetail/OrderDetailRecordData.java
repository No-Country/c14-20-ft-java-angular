/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.orderDetail;

import jakarta.validation.constraints.NotBlank;

/**
 *
 * @author JAIME DIAZ
 */
public record OrderDetailRecordData(
    @NotBlank
    Long product,   
    @NotBlank
    Integer cantidad   
    ) {

}
