/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.no_country.foodTech_delivery.api.repositories;

import com.no_country.foodTech_delivery.api.domain.userEntity.RoleEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author JAIME DIAZ
 */
@Repository
public interface RoleRepository extends CrudRepository<RoleEntity, Long>{
    
}
