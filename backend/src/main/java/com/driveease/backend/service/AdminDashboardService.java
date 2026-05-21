package com.driveease.backend.service;

import com.driveease.backend.entity.Rental;

import com.driveease.backend.entity.Reservation;

import com.driveease.backend.repository.CustomerRepository;

import com.driveease.backend.repository.RentalRepository;

import com.driveease.backend.repository.ReservationRepository;

import com.driveease.backend.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.HashMap;

import java.util.List;

import java.util.Map;


@Service

public class AdminDashboardService {


    @Autowired

    private VehicleRepository vehicleRepository;


    @Autowired

    private CustomerRepository customerRepository;


    @Autowired

    private RentalRepository rentalRepository;


    @Autowired

    private ReservationRepository reservationRepository;


    // DASHBOARD STATS

    public Map<String, Object> getDashboardStats() {

        Map<String, Object> data =

                new HashMap<>();


        data.put(

                "totalVehicles",

                vehicleRepository.count()

        );


        data.put(

                "totalCustomers",

                customerRepository.count()

        );


        data.put(

                "totalRentals",

                rentalRepository.count()

        );


        data.put(

                "revenue",

                rentalRepository.getTotalRevenue()

        );


        return data;

    }


    // RECENT RENTALS

    public List<Rental> getRecentRentals() {

        return rentalRepository
                .getRecentRentals();

    }


    // RECENT RESERVATIONS

    public List<Reservation>
    getRecentReservations() {

        return reservationRepository
                .getRecentReservations();

    }

}