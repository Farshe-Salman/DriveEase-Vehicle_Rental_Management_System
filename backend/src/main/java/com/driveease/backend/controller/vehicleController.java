package com.driveease.backend.controller;

import com.driveease.backend.entity.Vehicle;
import com.driveease.backend.service.VehicleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vehicles")
@CrossOrigin("*")
public class vehicleController {
    private final VehicleService service;

    public vehicleController(VehicleService service) {
        this.service = service;
    }

    @GetMapping
    public List<Vehicle> getALlVehicles() {
        return service.getAllVehicles();
    }

    @GetMapping("/{id}")
    public Vehicle getVehicleById(@PathVariable Long id)
    {
        return service.getVehicleById(id);
    }
}
