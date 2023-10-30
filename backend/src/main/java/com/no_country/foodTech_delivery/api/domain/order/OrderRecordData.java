/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.order;

import com.no_country.foodTech_delivery.api.domain.orderDetail.OrderDetailRecordData;
import jakarta.validation.constraints.NotNull;
import java.util.List;

/**
 *
 * @author JAIME DIAZ
 */
public record OrderRecordData(
    @NotNull
    String city,
    @NotNull
    Long userEntity,
    @NotNull
    String address,
    @NotNull 
    String paymentMethod,
    @NotNull
    List<OrderDetailRecordData> orderDetail){
}   
    
