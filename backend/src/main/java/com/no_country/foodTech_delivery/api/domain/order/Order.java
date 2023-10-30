/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.domain.order;

import com.no_country.foodTech_delivery.api.domain.orderDetail.OrderDetail;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserEntity;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 *
 * @author JAIME DIAZ
 */
@Table(name = "orders")
@Entity(name = "Order")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private UserEntity userEntity;
    private LocalDateTime date;
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<OrderDetail> detail; 
    private String city;
    private String address;
    private String paymentMethod;
    private Double total; 
    private Boolean active;
    private Boolean canceled;

    public Order(OrderRecordData orderRecordData) {        
        this.date = LocalDateTime.now();
        this.address = orderRecordData.address();
        this.paymentMethod = orderRecordData.paymentMethod(); 
        this.city = orderRecordData.city();
        this.active = true;
        this.canceled = false;
    }

    public void updateData(OrderUpdateData orderUpdateData) {
        if(orderUpdateData.city()!=null){
            this.city = orderUpdateData.city();
        }
        if(orderUpdateData.address()!=null){
            this.address = orderUpdateData.address();
        }
        if(orderUpdateData.paymentMethod()!=null){
            this.paymentMethod = orderUpdateData.paymentMethod();
        }
    }

    public void cancel() {
        this.canceled = true;
        this.active = false;
    }

    public void ready() {
        this.active = false;
    }
    
}
