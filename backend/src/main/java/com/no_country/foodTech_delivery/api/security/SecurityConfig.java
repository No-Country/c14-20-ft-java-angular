/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.no_country.foodTech_delivery.api.security;

import com.no_country.foodTech_delivery.api.repositories.UserRepository;
import com.no_country.foodTech_delivery.api.security.jwt.JwtAuthenticationFilter;
import com.no_country.foodTech_delivery.api.security.jwt.JwtAuthorizationFilter;
import com.no_country.foodTech_delivery.api.security.jwt.JwtUtils;
import com.no_country.foodTech_delivery.api.service.impl.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 *
 * @author JAIME DIAZ
 */
@Configuration
public class SecurityConfig {
    
    @Autowired
    private UserDetailsServiceImpl userDetailsService;
    
    @Autowired
    private JwtUtils jwtUtils;
    
    @Autowired
    private JwtAuthorizationFilter authorizationFilter;
    
    @Autowired
    private UserRepository userRepository;
    
    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity, AuthenticationManager authenticationManager) throws Exception{
        
        JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtUtils, userRepository);
        jwtAuthenticationFilter.setAuthenticationManager(authenticationManager);
        jwtAuthenticationFilter.setFilterProcessesUrl("/login");
        return httpSecurity
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> {
                    auth.requestMatchers(HttpMethod.POST, "/login").permitAll();
                    auth.requestMatchers(HttpMethod.POST, "/api/users").permitAll();
                    auth.requestMatchers(HttpMethod.GET, "api/products").permitAll();
                    auth.requestMatchers(HttpMethod.GET, "api/products/**").permitAll();
                    auth.anyRequest().authenticated();
                })
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilter(jwtAuthenticationFilter)
                .addFilterBefore(authorizationFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }
    
    @Bean
    PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    AuthenticationManager authenticationManager(HttpSecurity httpSecurity, PasswordEncoder passwordEncoder) throws Exception{
        return httpSecurity.getSharedObject(AuthenticationManagerBuilder.class)
                .userDetailsService(userDetailsService)
                .passwordEncoder(passwordEncoder)
                .and().build();
    }
    
    @Bean
    public WebMvcConfigurer CORSConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("*")
                        .allowedMethods("GET", "POST", "PUT","DELETE")
                        .allowedHeaders("*");
            }
        };
    }

}
