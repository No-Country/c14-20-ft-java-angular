package com.no_country.foodTech_delivery.domain.category;

import jakarta.validation.constraints.NotBlank;

public record CategoryRecordData (
    @NotBlank
    String name,
    @NotBlank
    String description) {
        
    }