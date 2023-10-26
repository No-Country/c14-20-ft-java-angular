/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.service.impl;

import com.no_country.foodTech_delivery.domain.order.Order;
import com.no_country.foodTech_delivery.domain.order.OrderRecordData;
import com.no_country.foodTech_delivery.domain.order.OrderRepository;
import com.no_country.foodTech_delivery.domain.order.OrderResponseData;
import com.no_country.foodTech_delivery.domain.order.OrderUpdateData;
import com.no_country.foodTech_delivery.domain.orderDetail.OrderDetail;
import com.no_country.foodTech_delivery.domain.orderDetail.OrderDetailRecordData;
import com.no_country.foodTech_delivery.domain.product.Product;
import com.no_country.foodTech_delivery.domain.product.ProductRepository;
import com.no_country.foodTech_delivery.service.interfaces.IOrderService;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
public class OrderService implements IOrderService {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private OrderRepository orderRepository;
    
    @Override
    public ResponseEntity<OrderResponseData> create(OrderRecordData orderRecordData, UriComponentsBuilder uriComponentsBuilder) {
        Order order = new Order(orderRecordData);
        Double total = 0D;
        for(OrderDetailRecordData orderDetailRecordData : orderRecordData.orderDetail()){
            Product product = productRepository.getReferenceById(orderDetailRecordData.product());
            OrderDetail orderDetail = new OrderDetail(orderDetailRecordData, product);
            order.getDetail().add(orderDetail);
            total += (double)(orderDetail.getCantidad() * orderDetail.getPrice());
        }
        order.setTotal(total);
        Order orderSaved = orderRepository.save(order);
        URI url = uriComponentsBuilder.path("/order/{id}").buildAndExpand(orderSaved.getId()).toUri();
        return ResponseEntity.created(url).body(new OrderResponseData(orderSaved));
    }

    @Override
    public ResponseEntity<Page<OrderResponseData>> list(Pageable pagination) {
        return ResponseEntity.ok(orderRepository.findAll(pagination).map(OrderResponseData::new));
    }

    @Override
    public ResponseEntity<OrderResponseData> update(OrderUpdateData orderUpdateData) {
        Order order = orderRepository.getReferenceById(orderUpdateData.id());
        if (!orderUpdateData.active()){
            order.ready();
        }else {
            order.updateData(orderUpdateData);
        }
        return ResponseEntity.ok(new OrderResponseData(order));        
    }

    @Override
    public void delete(Long id) {
        Order order = orderRepository.getReferenceById(id);
        order.cancel();
    }

    @Override
    public ResponseEntity<OrderResponseData> find(Long id) {
        Order order = orderRepository.getReferenceById(id);
        return ResponseEntity.ok(new OrderResponseData(order));
    }
    
    
}
