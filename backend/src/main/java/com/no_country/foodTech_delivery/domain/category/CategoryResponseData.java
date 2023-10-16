package com.no_country.foodTech_delivery.domain.category;

public record CategoryResponseData (Long id, String name, String description){
    public CategoryResponseData(Category category){
        this(category.getId(), category.getName(), category.getDescription());
    }
}
