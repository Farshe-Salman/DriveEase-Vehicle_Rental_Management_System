package com.driveease.backend.entity;

import jakarta.persistence.*;

import lombok.*;

import java.util.Date;

@Entity

@Table(name = "PAYMENT")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class Payment {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "payment_seq_gen"
    )

    @SequenceGenerator(
            name = "payment_seq_gen",
            sequenceName = "PAYMENT_SEQ",
            allocationSize = 1
    )

    @Column(name = "P_ID")

    private Long id;



    @Column(name = "PAYMENT_DATE")

    @Temporal(TemporalType.DATE)

    private Date paymentDate;



    @Column(name = "AMOUNT")

    private Double amount;



    @Column(name = "PAYMENT_METHOD")

    private String paymentMethod;



    @ManyToOne

    @JoinColumn(name = "RENT_ID")

    private Rental rental;

}