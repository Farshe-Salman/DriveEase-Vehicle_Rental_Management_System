package com.driveease.backend.service;

import com.driveease.backend.entity.Customer;
import com.driveease.backend.repository.CustomerRepository;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final CustomerRepository customerRepository;

    public AuthService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public Customer signup(Customer customer) {
        return customerRepository.save(customer);
    }

    public Customer login(String email, String password) {
        Customer customer = customerRepository.findByEmail(email);

        if (customer != null && customer.getPassword().equals(password)) {
            return customer;
        }

        return null;
    }

    public Customer updateCustomer(

            Long id,

            Customer updatedCustomer

    ) {

        Customer customer =

                customerRepository
                        .findById(id)
                        .orElseThrow();


        customer.setFullName(

                updatedCustomer.getFullName()

        );

        customer.setAddress(

                updatedCustomer.getAddress()

        );

        customer.setDrivingLicense(

                updatedCustomer.getDrivingLicense()

        );

        customer.setEmail(

                updatedCustomer.getEmail()

        );

        customer.setPhoneNumber(

                updatedCustomer.getPhoneNumber()

        );


        return customerRepository.save(customer);

    }
}
