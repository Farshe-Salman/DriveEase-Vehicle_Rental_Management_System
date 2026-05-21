package com.driveease.backend.service;

import com.driveease.backend.entity.Payment;

import com.driveease.backend.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class PaymentService {


    @Autowired

    private PaymentRepository paymentRepository;



    public List<Payment> getAllPayments() {

        return paymentRepository.findAll();

    }

}