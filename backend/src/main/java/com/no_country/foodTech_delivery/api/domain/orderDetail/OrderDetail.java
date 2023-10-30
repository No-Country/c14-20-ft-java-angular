/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.orderDetail;

import com.no_country.foodTech_delivery.api.domain.order.Order;
import com.no_country.foodTech_delivery.api.domain.product.Product;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 *
 * @author JAIME DIAZ
 */
@Table(name = "orderDetails")
@Entity(name = "OrderDetail")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class OrderDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;    
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;    
    private Integer cantidad;
    private Float price;

    public OrderDetail(OrderDetailRecordData orderDetailRecordData, Product product) {
       this.cantidad = orderDetailRecordData.cantidad();
       this.product = product;
       this.price = this.product.getPrice();
    }
}
