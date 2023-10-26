package com.no_country.foodTech_delivery.controller;

import com.no_country.foodTech_delivery.domain.order.OrderRecordData;
import com.no_country.foodTech_delivery.domain.order.OrderResponseData;
import com.no_country.foodTech_delivery.domain.order.OrderUpdateData;
import com.no_country.foodTech_delivery.service.interfaces.IOrderService;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JAIME DIAZ
 */
@RestController
@RequestMapping("/order")
public class OrderController {
    
    @Autowired
    private IOrderService orderService;
    
    @PostMapping
    public ResponseEntity<OrderResponseData> createOrderWithDetails(@RequestBody @Valid OrderRecordData orderRecordData, UriComponentsBuilder uriComponentsBuilder) {
        return orderService.create(orderRecordData, uriComponentsBuilder);
    }
    
    @GetMapping
    public ResponseEntity<Page<OrderResponseData>> ListOrder(@PageableDefault(size = 20) Pageable pagination) {
        return orderService.list(pagination);
    }
    
    @PutMapping
    @Transactional
    public ResponseEntity<OrderResponseData> updateProduct(@RequestBody @Valid OrderUpdateData orderUpdateData) {
        return orderService.update(orderUpdateData);
    }
    
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity deleteOrder(@PathVariable Long id) {
        orderService.delete(id);
        return ResponseEntity.noContent().build();        
    }
    
    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<OrderResponseData> returnOrder(@PathVariable Long id){
        return orderService.find(id);
    }
}
