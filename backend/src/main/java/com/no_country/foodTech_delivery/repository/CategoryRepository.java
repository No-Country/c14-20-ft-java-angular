package com.no_country.foodTech_delivery.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.no_country.foodTech_delivery.domain.category.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Page<Category> findByEnableTrue(Pageable pagination);
}
