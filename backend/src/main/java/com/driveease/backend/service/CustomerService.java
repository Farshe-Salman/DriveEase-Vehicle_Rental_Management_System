package com.driveease.backend.service;

import com.driveease.backend.entity.Customer;

import com.driveease.backend.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;


@Service

public class CustomerService {


    @Autowired

    private CustomerRepository customerRepository;



    public List<Customer> getAllCustomers() {

        return customerRepository.findAll();

    }

}