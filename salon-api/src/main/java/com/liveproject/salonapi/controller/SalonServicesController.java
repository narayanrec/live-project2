package com.liveproject.salonapi.controller;

import com.liveproject.salonapi.domain.SalonServiceDetail;
import com.liveproject.salonapi.domain.Slot;
import com.liveproject.salonapi.repository.SalonServiceDetailRepository;
import com.liveproject.salonapi.repository.SlotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping(path = "/api/services")
@CrossOrigin(origins = "*")
public class SalonServicesController {

    @Autowired
    SalonServiceDetailRepository salonServiceDetailRepository;

    @Autowired
    SlotRepository slotRepository;

    @GetMapping("/retrieveAvailableSalonServices")
    Iterable<SalonServiceDetail> retrieveSalonServices() {

        return salonServiceDetailRepository.findAll();

    }

    @GetMapping("/retrieveAvailableSlots/{salonServiceId}/{requestDate}")
    Iterable<Slot> retrieveAvailableSlots(@PathVariable long salonServiceId, @PathVariable("requestDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE, pattern = "yyyy-MM-dd") LocalDate requestDate) {

        return slotRepository.getAllSlots(salonServiceId, requestDate);

    }
}
