package com.liveproject.salonapi.controller;

import com.liveproject.salonapi.domain.SalonServiceDetail;
import com.liveproject.salonapi.repository.SalonServiceDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/services")
@CrossOrigin(origins = "*")
public class SalonServicesController {

    @Autowired
    SalonServiceDetailRepository salonServiceDetailRepository;

    @GetMapping("/retrieveAvailableSalonServices")
    Iterable<SalonServiceDetail> retrieveSalonServices() {

        return salonServiceDetailRepository.findAll();

    }
}
