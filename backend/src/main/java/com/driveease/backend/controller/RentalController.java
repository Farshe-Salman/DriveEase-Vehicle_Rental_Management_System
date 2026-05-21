package com.driveease.backend.controller;

import com.driveease.backend.entity.Rental;

import com.driveease.backend.service.RentalService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/api/rental")

@CrossOrigin("*")

public class RentalController {


    @Autowired

    private RentalService rentalService;


    @PostMapping("/book")

    public ResponseEntity<?> bookVehicle(

            @RequestBody Rental rental

    ) {

        return ResponseEntity.ok(

                rentalService.bookVehicle(rental)

        );

    }

    @GetMapping("/customer/{id}")

    public ResponseEntity<List<Rental>> getCustomerRentals(

            @PathVariable Long id

    ) {

        return ResponseEntity.ok(

                rentalService.getCustomerRentals(id)

        );

    }

}