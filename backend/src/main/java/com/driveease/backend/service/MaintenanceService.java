package com.driveease.backend.service;

import com.driveease.backend.entity.Maintenance;

import com.driveease.backend.repository.MaintenanceRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class MaintenanceService {


    @Autowired

    private MaintenanceRepository maintenanceRepository;



    public List<Maintenance> getAllMaintenance() {

        return maintenanceRepository.findAll();

    }

}