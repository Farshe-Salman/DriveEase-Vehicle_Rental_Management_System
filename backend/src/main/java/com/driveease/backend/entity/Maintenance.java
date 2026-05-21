package com.driveease.backend.entity;

import jakarta.persistence.*;

import lombok.*;

import java.util.Date;

@Entity

@Table(name = "MAINTENANCE")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class Maintenance {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "maintenance_seq_gen"
    )

    @SequenceGenerator(
            name = "maintenance_seq_gen",
            sequenceName = "MAINTENANCE_SEQ",
            allocationSize = 1
    )

    @Column(name = "MAINTENANCE_ID")

    private Long id;



    @Column(name = "MAINTENANCE_DATE")

    @Temporal(TemporalType.DATE)

    private Date maintenanceDate;



    @Column(name = "DESCRIPTION")

    private String description;



    @Column(name = "MAINTENANCE_COST")

    private Double maintenanceCost;



    @ManyToOne

    @JoinColumn(name = "V_ID")

    private Vehicle vehicle;

}