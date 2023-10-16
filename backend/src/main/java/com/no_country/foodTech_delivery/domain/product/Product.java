package com.no_country.foodTech_delivery.domain.product;

import com.no_country.foodTech_delivery.domain.category.Category;
import com.no_country.foodTech_delivery.domain.category.CategoryRepository;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@Table(name = "products")
@Entity(name = "Product")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Float price;
    private Long stock;
    private String image;
    private Boolean enable;  
    
    
    public Product(ProductRecordData productRecordData, Category category) {
        this.name = productRecordData.name();        
        this.description = productRecordData.description();
        this.category = category;
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.price = productRecordData.price();
        this.stock = 0L;
        this.image = productRecordData.image();
        this.enable = true;
    }

    public void updateData(ProductUpdateData productUpdateData, Category category) {
        if(productUpdateData.name()!=null){
            this.name = productUpdateData.name();
        }
        if(productUpdateData.description()!=null){
            this.description = productUpdateData.description();
        }
        if(category!=null){
            this.category = category;
        }
        if(productUpdateData.price()!=null){
            this.price = productUpdateData.price();
        }
        if(productUpdateData.image()!=null){
            this.image = productUpdateData.image();
        }
        this.updatedAt = LocalDateTime.now();
    }

    public void disableProduct() {
        this.enable = false;
        this.updatedAt = LocalDateTime.now();
    }
}