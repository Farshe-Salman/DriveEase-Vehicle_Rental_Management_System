package com.driveease.backend.controller;

import com.driveease.backend.entity.Reservation;

import com.driveease.backend.service.ReservationService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/api/reservation")

@CrossOrigin("*")

public class ReservationController {


    @Autowired

    private ReservationService reservationService;


    @PostMapping("/reserve")

    public ResponseEntity<?> reserveVehicle(

            @RequestBody Reservation reservation

    ) {

        return ResponseEntity.ok(

                reservationService.reserveVehicle(

                        reservation

                )

        );

    }

    @GetMapping("/customer/{id}")

    public ResponseEntity<List<Reservation>> getCustomerReservations(

            @PathVariable Long id

    ) {

        return ResponseEntity.ok(

                reservationService
                        .getCustomerReservations(id)

        );

    }

}