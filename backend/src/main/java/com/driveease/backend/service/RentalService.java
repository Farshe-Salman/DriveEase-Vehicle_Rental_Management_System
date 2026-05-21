package com.driveease.backend.service;

import com.driveease.backend.entity.Rental;

import com.driveease.backend.repository.RentalRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class RentalService {


    @Autowired

    private RentalRepository rentalRepository;


    public String bookVehicle(Rental rental) {
        rental.setRentalStatus(
                "Ongoing"
        );


        rental.setPaymentStatus(

                "Pending"

        );


        rentalRepository.save(rental);


        return "Vehicle Booked Successfully";

    }

    public List<Rental> getCustomerRentals(Long customerId) {

        return rentalRepository.findByCustomerId(

                customerId

        );

    }

    public List<Rental> getAllRentals() {

        return rentalRepository.findAll();

    }

}