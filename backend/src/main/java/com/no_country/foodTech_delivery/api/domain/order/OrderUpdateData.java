/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.order;

import lombok.NonNull;

/**
 *
 * @author JAIME DIAZ
 */
public record OrderUpdateData(
        @NonNull
        Long id,
        String city,
        String address,
        String paymentMethod,
        Boolean active,
        Boolean canceled) {

}
