package com.driveease.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity

@Table(name = "VEHICLE")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class Vehicle {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "vehicle_seq_gen"
    )

    @SequenceGenerator(
            name = "vehicle_seq_gen",
            sequenceName = "VEHICLE_SEQ",
            allocationSize = 1
    )

    @Column(name = "V_ID")

    private Long id;


    @Column(name = "VEHICLE_NAME")

    private String vehicleName;



    @Column(name = "MODEL")

    private String model;



    @Column(name = "REGISTRATION_NO")

    private String registrationNo;



    @Column(name = "MANUFACTURING_YEAR")

    private Integer manufacturingYear;



    @Column(name = "PRICE_PER_DAY")

    private Double pricePerDay;



    @Column(name = "AVAILABILITY_STATUS")

    private String availabilityStatus;



    @Column(name = "IMAGE_NAME")

    private String imageName;

}
