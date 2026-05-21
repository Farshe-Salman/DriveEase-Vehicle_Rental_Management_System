package com.driveease.backend.controller;

import com.driveease.backend.entity.Employee;

import com.driveease.backend.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/employees")

@CrossOrigin("*")

public class EmployeeController {

    @Autowired

    private EmployeeService employeeService;

    @GetMapping

    public ResponseEntity<List<Employee>>
    getAllEmployees() {

        return ResponseEntity.ok(

                employeeService.getAllEmployees()

        );

    }

}