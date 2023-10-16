package com.no_country.foodTech_delivery.repository;

import com.no_country.foodTech_delivery.model.entity.ClassEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterfaceRepository extends JpaRepository<ClassEntity, Long> {
}
