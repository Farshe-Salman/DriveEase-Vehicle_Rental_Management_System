package com.driveease.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name="CUSTOMER")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Customer {
    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "customer_seq_gen"
    )

    @SequenceGenerator(
            name = "customer_seq_gen",
            sequenceName = "CUSTOMER_SEQ",
            allocationSize = 1
    )

    @Column (name="C_ID")
    private Long id;

    @Column(name = "CUSTOMER_NAME")
    private String fullName;

    @Column(name = "ADDRESS")
    private String address;

    @Column(name = "DRIVING_LICENSE_NO")
    private String drivingLicense;

    @Column(name = "REGISTRATION_DATE")
    private Date registration_Date;

    @Column(name = "EMAIL")
    private String email;

    @Column(name = "PASSWORD")
    private String password;

    @Column(name = "PHONE_NUMBER")
    private String phoneNumber;
}
