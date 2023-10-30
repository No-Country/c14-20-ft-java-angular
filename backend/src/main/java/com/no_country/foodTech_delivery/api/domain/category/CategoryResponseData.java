/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Record.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.category;

/**
 *
 * @author JAIME DIAZ
 */
public record CategoryResponseData (Long id, String name, String description){
    public CategoryResponseData(Category category){
        this(category.getId(), category.getName(), category.getDescription());
    }
}
