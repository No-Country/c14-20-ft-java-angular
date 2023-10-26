/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.domain.order;

import java.time.LocalDateTime;

/**
 *
 * @author JAIME DIAZ
 */
public record OrderResponseData(Long id, LocalDateTime date, String address, String paymentMethod, Double total) {

    public OrderResponseData(Order order) {
        this(order.getId(), order.getDate(), order.getAddress(), order.getPaymentMethod(), order.getTotal());
    }

}
