/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.api.service.interfaces;

import com.no_country.foodTech_delivery.api.domain.order.OrderRecordData;
import com.no_country.foodTech_delivery.api.domain.order.OrderResponseData;
import com.no_country.foodTech_delivery.api.domain.order.OrderUpdateData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
public interface IOrderService {

    public ResponseEntity<OrderResponseData> create(OrderRecordData orderRecordData, UriComponentsBuilder uriComponentsBuilder);

    public ResponseEntity<Page<OrderResponseData>> list(Pageable pagination);

    public ResponseEntity<OrderResponseData> update(OrderUpdateData orderUpdateData);

    public void delete(Long id);

    public ResponseEntity<OrderResponseData> find(Long id);
    
}
