package com.no_country.foodTech_delivery.api.repositories;

import com.no_country.foodTech_delivery.api.domain.product.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    public Page<Product> findByEnableTrue(Pageable pagination);

}