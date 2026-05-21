package com.driveease.backend.controller;

import com.driveease.backend.entity.Rental;

import com.driveease.backend.entity.Reservation;

import com.driveease.backend.service.AdminDashboardService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.Map;


@RestController

@RequestMapping("/api/admin")

@CrossOrigin("*")

public class AdminDashboardController {


    @Autowired

    private AdminDashboardService adminDashboardService;


    // DASHBOARD STATS

    @GetMapping("/dashboard")

    public ResponseEntity<Map<String, Object>>
    getDashboardStats() {

        return ResponseEntity.ok(

                adminDashboardService
                        .getDashboardStats()

        );

    }


    // RECENT RENTALS

    @GetMapping("/recent-rentals")

    public ResponseEntity<List<Rental>>
    getRecentRentals() {

        return ResponseEntity.ok(

                adminDashboardService
                        .getRecentRentals()

        );

    }


    // RECENT RESERVATIONS

    @GetMapping("/recent-reservations")

    public ResponseEntity<List<Reservation>>
    getRecentReservations() {

        return ResponseEntity.ok(

                adminDashboardService
                        .getRecentReservations()

        );

    }

}