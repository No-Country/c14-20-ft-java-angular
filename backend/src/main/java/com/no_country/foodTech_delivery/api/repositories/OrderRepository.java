/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.api.repositories;

import com.no_country.foodTech_delivery.api.domain.order.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JAIME DIAZ
 */
@Repository
public interface OrderRepository extends JpaRepository<Order, Long>{
    
}
