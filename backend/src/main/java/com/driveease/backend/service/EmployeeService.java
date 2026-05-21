package com.driveease.backend.service;

import com.driveease.backend.entity.Employee;

import com.driveease.backend.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class EmployeeService {

    @Autowired

    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();

    }

}