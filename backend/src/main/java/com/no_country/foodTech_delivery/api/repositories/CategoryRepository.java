/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.api.repositories;

import com.no_country.foodTech_delivery.api.domain.category.Category;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JAIME DIAZ
 */
@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {
    public Page<Category> findByEnableTrue(Pageable pagination);
}
