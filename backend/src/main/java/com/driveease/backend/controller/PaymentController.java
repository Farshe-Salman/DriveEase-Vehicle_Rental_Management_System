package com.driveease.backend.controller;

import com.driveease.backend.entity.Payment;

import com.driveease.backend.service.PaymentService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/payments")

@CrossOrigin("*")

public class PaymentController {


    @Autowired

    private PaymentService paymentService;



    @GetMapping

    public ResponseEntity<List<Payment>>
    getAllPayments() {

        return ResponseEntity.ok(

                paymentService.getAllPayments()

        );

    }

}