/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.service.impl;

import com.no_country.foodTech_delivery.api.domain.category.Category;
import com.no_country.foodTech_delivery.api.domain.product.Product;
import com.no_country.foodTech_delivery.api.domain.product.ProductRecordData;
import com.no_country.foodTech_delivery.api.domain.product.ProductResponseData;
import com.no_country.foodTech_delivery.api.domain.product.ProductUpdateData;
import com.no_country.foodTech_delivery.api.repositories.CategoryRepository;
import com.no_country.foodTech_delivery.api.repositories.ProductRepository;
import com.no_country.foodTech_delivery.api.service.interfaces.IProductService;

import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.util.UriComponentsBuilder;

/**
 *
 * @author JAIME DIAZ
 */
@Service
public class ProductService implements IProductService{
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public ResponseEntity<ProductResponseData> create(ProductRecordData productRecordData, UriComponentsBuilder uriComponentsBuilder) {
        Category category = categoryRepository.getReferenceById(productRecordData.category());
        Product product = productRepository.save(new Product(productRecordData, category));
        URI url = uriComponentsBuilder.path("/products/{id}").buildAndExpand(product.getId()).toUri();
        return ResponseEntity.created(url).body(new ProductResponseData(product));
    }

    @Override
    public ResponseEntity<Page<ProductResponseData>> list(Pageable pagination) {
        return ResponseEntity.ok(productRepository.findByEnableTrue(pagination).map(ProductResponseData::new));
    }

    @Override
    public ResponseEntity<ProductResponseData> update(ProductUpdateData productUpdateData) {
        Category category = null;
        if(productUpdateData.category()!=null){
            category = categoryRepository.getReferenceById(productUpdateData.category());
        }
        Product product = productRepository.getReferenceById(productUpdateData.id());
        product.updateData(productUpdateData, category);
        return ResponseEntity.ok(new ProductResponseData(product));
    }

    @Override
    public void delete(Long id) {
        Product product = productRepository.getReferenceById(id);
        product.disableProduct();
    }

    @Override
    public ResponseEntity<ProductResponseData> find(Long id) {
        Product product = productRepository.getReferenceById(id);
        return ResponseEntity.ok(new ProductResponseData(product));
    }
    
}
