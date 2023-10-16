package com.no_country.foodTech_delivery.service.interfaces;

import com.no_country.foodTech_delivery.model.entity.User;

import java.util.List;
import java.util.Optional;

public interface IUserService {
    Optional<User> getUserById(Long userId);
    List<User> getAllUsers();
    User saveUser(User user);
    void deleteUser(User user);
}
