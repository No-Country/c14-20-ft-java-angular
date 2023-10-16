package com.no_country.foodTech_delivery.service.impl;

import com.no_country.foodTech_delivery.model.entity.User;
import com.no_country.foodTech_delivery.repository.UserRepository;
import com.no_country.foodTech_delivery.service.interfaces.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private  UserRepository userRepository;


    @Override
    @Transactional(readOnly = true)
    public Optional<User> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    @Override
    @Transactional(readOnly = true)
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    @Transactional
    public User saveUser(User user) {

        ///
        Optional<User> emailFound =  userRepository.findByEmail(user.getEmail());
        if(!emailFound.isPresent()) {
            userRepository.save(user);
        }else{
            try {
                throw  new Exception("Correo ya registrado: "+user.getEmail());
            } catch (Exception e) {
                throw new RuntimeException(e);
            }
        }


        return user;
    }

    @Override
    @Transactional
    public void deleteUser(User user) {
        userRepository.delete(user);
    }
}
