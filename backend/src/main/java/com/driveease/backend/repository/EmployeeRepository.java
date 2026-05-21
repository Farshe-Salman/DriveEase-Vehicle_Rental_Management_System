package com.driveease.backend.repository;

import com.driveease.backend.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {
}