package com.driveease.backend.controller;

import com.driveease.backend.entity.Vehicle;
import com.driveease.backend.repository.VehicleRepository;
import com.driveease.backend.service.VehicleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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

//    @GetMapping
//
//    public ResponseEntity<List<Vehicle>>
//    getAllVehicles() {
//
//        return ResponseEntity.ok(
//
//                service.getAllVehicles()
//
//        );
//
//    }
//
    @PostMapping("/add")

    public ResponseEntity<Vehicle>
    addVehicle(

            @ModelAttribute Vehicle vehicle,

            @RequestParam("image")
            MultipartFile image

    ) throws IOException {


        return ResponseEntity.ok(

                service.addVehicle(

                        vehicle,
                        image

                )

        );

    }



    // UPDATE VEHICLE

    @PutMapping("/update/{id}")

    public ResponseEntity<Vehicle>
    updateVehicle(

            @PathVariable Long id,

            @RequestBody Vehicle vehicle

    ) {

        return ResponseEntity.ok(

                service.updateVehicle(
                        id,
                        vehicle
                )

        );

    }

}
