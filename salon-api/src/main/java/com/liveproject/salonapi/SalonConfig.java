package com.liveproject.salonapi;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SalonConfig {
    @Value("name")
    String name;
    @Value("address")
    String address;
    @Value("city")
    String city;
    @Value("state")
    String state;
    @Value("zipcode")
    String zipcode;
    @Value("phone")
    String phone;


}
