package com.driveease.backend.controller;

import com.driveease.backend.entity.Customer;

import com.driveease.backend.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/api/customers")

@CrossOrigin("*")

public class CustomerController {


    @Autowired

    private CustomerService customerService;



    @GetMapping

    public ResponseEntity<List<Customer>>
    getAllCustomers() {

        return ResponseEntity.ok(

                customerService.getAllCustomers()

        );

    }

}