package com.no_country.foodTech_delivery.api.domain.product;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ProductRecordData (
    @NotBlank
    String name,
    @NotBlank
    String description,
    @NotNull
    Long category,
    @NotNull
    Float price,
    @NotBlank    
    String image){     
}
