package com.no_country.foodTech_delivery.domain.category;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Page<Category> findByEnableTrue(Pageable pagination);
}
