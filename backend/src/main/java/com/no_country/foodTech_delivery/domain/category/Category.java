package com.no_country.foodTech_delivery.domain.category;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Table(name = "categories")
@Entity(name = "Category")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;    
    private Boolean enable; 

    public Category(CategoryRecordData categoryRecordData){
        this.name = categoryRecordData.name();
        this.description = categoryRecordData.description();
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
        this.enable = true;
    }

    public void updateData(CategoryUpdateData categoryUpdateData) {
        if(categoryUpdateData.name()!=null){
            this.name = categoryUpdateData.name();
        }
        if(categoryUpdateData.description()!=null){
            this.description = categoryUpdateData.description();
        }
        this.updatedAt = LocalDateTime.now();
    }

    public void disableCategory() {
        this.enable = false;
        this.updatedAt = LocalDateTime.now();
    }
}
