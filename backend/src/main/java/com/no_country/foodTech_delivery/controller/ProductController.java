package com.no_country.foodTech_delivery.controller;

import com.no_country.foodTech_delivery.domain.category.Category;
import com.no_country.foodTech_delivery.domain.category.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.no_country.foodTech_delivery.domain.product.Product;
import com.no_country.foodTech_delivery.domain.product.ProductRecordData;
import com.no_country.foodTech_delivery.domain.product.ProductRepository;
import com.no_country.foodTech_delivery.domain.product.ProductResponseData;
import com.no_country.foodTech_delivery.domain.product.ProductUpdateData;
import jakarta.transaction.Transactional;

import jakarta.validation.Valid;

import java.net.URI;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categgoryRepository;

    @PostMapping
    public ResponseEntity<ProductResponseData> createProduct(@RequestBody @Valid ProductRecordData productRecordData, UriComponentsBuilder uriComponentsBuilder) {
        Category category = categgoryRepository.getReferenceById(productRecordData.category());
        Product product = productRepository.save(new Product(productRecordData, category));
        URI url = uriComponentsBuilder.path("/products/{id}").buildAndExpand(product.getId()).toUri();
        return ResponseEntity.created(url).body(new ProductResponseData(product));
    }

    @GetMapping
    public ResponseEntity<Page<ProductResponseData>> ListProduct(@PageableDefault(size = 2) Pageable pagination) {
        return ResponseEntity.ok(productRepository.findByEnableTrue(pagination).map(ProductResponseData::new));
    }
    
    @PutMapping
    @Transactional
    public ResponseEntity<ProductResponseData> updateCaregory(@RequestBody @Valid ProductUpdateData productUpdateData) {
        Category category = null;
        if(productUpdateData.category()!=null){
            category = categgoryRepository.getReferenceById(productUpdateData.category());
        }
        Product product = productRepository.getReferenceById(productUpdateData.id());
        product.updateData(productUpdateData, category);
        return ResponseEntity.ok(new ProductResponseData(product));
    }
    
    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity deleteProduct(@PathVariable Long id) {
        Product product = productRepository.getReferenceById(id);
        product.disableProduct();
        return ResponseEntity.noContent().build();
    }
}
