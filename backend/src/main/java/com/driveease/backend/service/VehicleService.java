package com.driveease.backend.service;

import com.driveease.backend.entity.Vehicle;
import com.driveease.backend.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
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

    public Vehicle addVehicle(

            Vehicle vehicle,

            MultipartFile image

    ) throws IOException {


        // IMAGE SAVE

        if (image != null &&
                !image.isEmpty()) {

            String fileName =

                    image.getOriginalFilename();


            String uploadDir =
                    System.getProperty("user.dir")
                            + "/uploads/cars/";


            File dir = new File(uploadDir);

            if (!dir.exists()) {

                dir.mkdirs();

            }


            File destination = new File(
                    uploadDir + fileName
            );

            image.transferTo(destination);


            vehicle.setImageName(fileName);

        }


        return repo.save(vehicle);

    }

    public Vehicle updateVehicle(

            Long id,

            Vehicle updatedVehicle

    ) {


        Vehicle vehicle =

                repo.findById(id)
                        .orElseThrow();


        vehicle.setVehicleName(

                updatedVehicle.getVehicleName()

        );


        vehicle.setModel(

                updatedVehicle.getModel()

        );


        vehicle.setRegistrationNo(

                updatedVehicle.getRegistrationNo()

        );


        vehicle.setManufacturingYear(

                updatedVehicle.getManufacturingYear()

        );


        vehicle.setPricePerDay(

                updatedVehicle.getPricePerDay()

        );


        vehicle.setAvailabilityStatus(

                updatedVehicle
                        .getAvailabilityStatus()

        );


        return repo.save(vehicle);

    }

}
