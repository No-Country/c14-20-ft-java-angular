package com.no_country.foodTech_delivery.api.controller;

import com.no_country.foodTech_delivery.api.domain.product.ProductRecordData;
import com.no_country.foodTech_delivery.api.domain.product.ProductResponseData;
import com.no_country.foodTech_delivery.api.domain.product.ProductUpdateData;
import com.no_country.foodTech_delivery.api.service.interfaces.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;



@RestController
@RequestMapping("api/products")
@CrossOrigin(origins = {"http://localhost:4200"})
public class ProductController {

    @Autowired
    private IProductService productService;
    
    @PostMapping
    public ResponseEntity<ProductResponseData> createProduct(@RequestBody @Valid ProductRecordData productRecordData, UriComponentsBuilder uriComponentsBuilder) {
        return productService.create(productRecordData, uriComponentsBuilder);
    }   

    @GetMapping
    public ResponseEntity<Page<ProductResponseData>> listProduct(@PageableDefault(size = 20) Pageable pagination) {
        return productService.list(pagination);
    }
    
    @PutMapping
    @Transactional
    public ResponseEntity<ProductResponseData> updateProduct(@RequestBody @Valid ProductUpdateData productUpdateData) {
        return productService.update(productUpdateData);
    }
    
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();        
    }
    
    @GetMapping("/{id}")
    @Transactional
    public ResponseEntity<ProductResponseData> returnProduct(@PathVariable Long id){
        return productService.find(id);
    }
}
