package com.driveease.backend.service;

import com.driveease.backend.entity.Vehicle;
import com.driveease.backend.repository.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehicleService {
    public final VehicleRepository repo;

    public VehicleService(VehicleRepository repo) {
        this.repo = repo;
    }

    public List<Vehicle> getAllVehicles() {
        return repo.findAll();
    }

    public Vehicle getVehicleById(Long id) {
        return repo.findById(id).orElse(null);
    }
}
