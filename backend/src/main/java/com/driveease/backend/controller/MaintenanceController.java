package com.driveease.backend.controller;

import com.driveease.backend.entity.Maintenance;

import com.driveease.backend.service.MaintenanceService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/maintenance")

@CrossOrigin("*")

public class MaintenanceController {


    @Autowired

    private MaintenanceService maintenanceService;



    @GetMapping

    public ResponseEntity<List<Maintenance>>
    getAllMaintenance() {

        return ResponseEntity.ok(

                maintenanceService.getAllMaintenance()

        );

    }

}