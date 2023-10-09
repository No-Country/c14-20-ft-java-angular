package com.no_country.foodTech_delivery.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Entity
@Table(name = "table_class")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClassEntity implements Serializable {
    @Id
    @Column(name = "id_class")
    private Long idClass;
}
