package com.driveease.backend.repository;

import com.driveease.backend.entity.Payment;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository
        extends JpaRepository<Payment, Long> {
}