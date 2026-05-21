package com.driveease.backend.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Entity
@Table(name = "RENTAL")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Rental {

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "rental_seq_gen"
    )

    @SequenceGenerator(
            name = "rental_seq_gen",
            sequenceName = "RENTAL_SEQ",
            allocationSize = 1
    )
    @Column(name = "Rent_ID")
    private int id;

    @Column(name = "RENTAL_START_DATE")

    @Temporal(TemporalType.DATE)

    private Date rentalStartDate;


    @Column(name = "EXPECTED_RETURN_DATE")

    @Temporal(TemporalType.DATE)

    private Date expectedReturnDate;


    @Column(name = "ACTUAL_RETURN_DATE")

    @Temporal(TemporalType.DATE)

    private Date actualReturnDate;


    @Column(name = "RENTAL_STATUS")

    private String rentalStatus;


    @Column(name = "TOTAL_COST")

    private Double totalCost;


    @Column(name = "PAYMENT_STATUS")

    private String paymentStatus;



    // CUSTOMER

    @ManyToOne

    @JoinColumn(name = "C_ID")

    private Customer customer;


    // VEHICLE

    @ManyToOne

    @JoinColumn(name = "V_ID")

    private Vehicle vehicle;


}
