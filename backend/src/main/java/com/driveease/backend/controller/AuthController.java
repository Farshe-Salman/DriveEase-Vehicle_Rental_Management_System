package com.driveease.backend.controller;

import com.driveease.backend.entity.Customer;
import com.driveease.backend.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/signup")
    public Customer signup(@RequestBody Customer customer) {
        return authService.signup(customer);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Customer customer) {
        Customer loggedInCustomer = authService.login(
                customer.getEmail(),
                customer.getPassword()
        );

        if (loggedInCustomer != null) {
            return ResponseEntity.ok(loggedInCustomer);
        }

        return ResponseEntity.status(401).body("Invalid email or password");
    }

    @PutMapping("/update/{id}")

    public ResponseEntity<Customer> updateCustomer(

            @PathVariable Long id,

            @RequestBody Customer customer

    ) {

        Customer updatedCustomer =

                authService.updateCustomer(

                        id,
                        customer

                );


        return ResponseEntity.ok(updatedCustomer);

    }

}
