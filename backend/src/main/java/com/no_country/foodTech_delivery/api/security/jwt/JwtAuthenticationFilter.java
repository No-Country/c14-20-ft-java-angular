/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.no_country.foodTech_delivery.api.domain.userEntity.UserEntity;
import com.no_country.foodTech_delivery.api.repositories.UserRepository;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 *
 * @author JAIME DIAZ
 */
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
    
    private JwtUtils jwrUtils;
    
    private UserRepository userRepository;
    
    public JwtAuthenticationFilter(JwtUtils jwtUtils, UserRepository userRepository){
        this.jwrUtils = jwtUtils;
        this.userRepository = userRepository;
        
    }
    
    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        UserEntity userEntity;
        String userName = "";
        String password = "";
        String name = "";
        try {
            userEntity = new ObjectMapper().readValue(request.getInputStream(), UserEntity.class);
            userName = userEntity.getEmail();
            password = userEntity.getPassword();
            name = userEntity.getName();
        } catch (IOException e) {
        }
        
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName, password);
        return getAuthenticationManager().authenticate(authenticationToken); 
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
        User user = (User)authResult.getPrincipal();
        UserEntity userEntity = userRepository.findByEmail(user.getUsername()).get();
        String token = jwrUtils.generateAccessToken(user.getUsername());
        response.addHeader("Authorization", token);
        Map<String, Object> httpResponse = new HashMap<>();
        httpResponse.put("token", token);
        httpResponse.put("Message", "Autenticacion correcta");
        httpResponse.put("email", user.getUsername());
        httpResponse.put("role", user.getAuthorities().toString());
        httpResponse.put("name", userEntity.getName());
        response.getWriter().write(new ObjectMapper().writeValueAsString(httpResponse));
        response.setStatus(HttpStatus.OK.value());
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);
        response.getWriter().flush();
        super.successfulAuthentication(request, response, chain, authResult);
    }
    
}
