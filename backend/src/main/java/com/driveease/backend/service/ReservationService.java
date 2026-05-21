package com.driveease.backend.service;

import com.driveease.backend.entity.Reservation;

import com.driveease.backend.repository.ReservationRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class ReservationService {


    @Autowired

    private ReservationRepository reservationRepository;


    public String reserveVehicle(

            Reservation reservation

    ) {

        reservation.setReservationStatus(

                "Pending"
        );


        reservationRepository.save(

                reservation

        );


        return "Vehicle Reserved Successfully";

    }

    public List<Reservation> getCustomerReservations(

            Long customerId

    ) {

        return reservationRepository.findByCustomerId(

                customerId

        );

    }

    public List<Reservation> getAllReservations() {

        return reservationRepository.findAll();

    }

}