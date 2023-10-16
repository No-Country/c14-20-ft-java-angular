package com.no_country.foodTech_delivery.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.no_country.foodTech_delivery.domain.category.Category;
import com.no_country.foodTech_delivery.domain.category.CategoryRecordData;
import com.no_country.foodTech_delivery.domain.category.CategoryRepository;
import com.no_country.foodTech_delivery.domain.category.CategoryResponseData;
import com.no_country.foodTech_delivery.domain.category.CategoryUpdateData;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping
    public ResponseEntity<CategoryResponseData> createCategory(@RequestBody @Valid CategoryRecordData categoryRecordData, UriComponentsBuilder uriComponentsBuilder) {
        Category category = categoryRepository.save(new Category(categoryRecordData));
        URI url = uriComponentsBuilder.path("/categories/{id}").buildAndExpand(category.getId()).toUri();
        return ResponseEntity.created(url).body(new CategoryResponseData(category));
    }

    @GetMapping
    public ResponseEntity<Page<CategoryResponseData>> ListCategory(@PageableDefault(size = 2) Pageable pagination) {
        return ResponseEntity.ok(categoryRepository.findByEnableTrue(pagination).map(CategoryResponseData::new));
    }

    @PutMapping
    @Transactional
    public ResponseEntity<CategoryResponseData> updateCaregory(@RequestBody @Valid CategoryUpdateData categoryUpdateData) {
        Category category = categoryRepository.getReferenceById(categoryUpdateData.id());
        category.updateData(categoryUpdateData);
        return ResponseEntity.ok(new CategoryResponseData(category));
    }

    @DeleteMapping("/{id}")
    @Transactional
    public ResponseEntity deleteCategory(@PathVariable Long id) {
        Category category = categoryRepository.getReferenceById(id);
        category.disableCategory();
        return ResponseEntity.noContent().build();
    }
}
