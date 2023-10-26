/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.service.interfaces;

import com.no_country.foodTech_delivery.domain.product.ProductRecordData;
import com.no_country.foodTech_delivery.domain.product.ProductResponseData;
import com.no_country.foodTech_delivery.domain.product.ProductUpdateData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
public interface IProductService {

    public ResponseEntity<ProductResponseData> create(ProductRecordData productRecordData, UriComponentsBuilder uriComponentsBuilder);

    public ResponseEntity<Page<ProductResponseData>> list(Pageable pagination);

    public ResponseEntity<ProductResponseData> update(ProductUpdateData productUpdateData);

    public void delete(Long id);

    public ResponseEntity<ProductResponseData> find(Long id);
    
}
