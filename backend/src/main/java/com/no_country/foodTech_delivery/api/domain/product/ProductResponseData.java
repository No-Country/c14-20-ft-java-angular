package com.no_country.foodTech_delivery.api.domain.product;

public record ProductResponseData (Long id, String name, String description, Long category, Float price, Long stock, String image, Boolean enable){
    public ProductResponseData (Product product){
        this(product.getId(), product.getName(), product.getDescription(),product.getCategory().getId(), product.getPrice(), product.getStock(), product.getImage(), product.getEnable());
    }  
}