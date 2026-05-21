package com.driveease.backend.repository;

import com.driveease.backend.entity.Maintenance;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MaintenanceRepository
        extends JpaRepository<Maintenance, Long> {
}