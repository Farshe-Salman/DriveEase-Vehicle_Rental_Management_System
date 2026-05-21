package com.driveease.backend.entity;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;
import java.util.Date;


@Entity

@Table(name = "RESERVATION")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor


public class Reservation {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "reservation_seq_gen"
    )

    @SequenceGenerator(
            name = "reservation_seq_gen",
            sequenceName = "RESERVATION_SEQ",
            allocationSize = 1
    )

    @Column(name = "RESERVATION_ID")

    private Long reservationId;


    @Column(name = "RESERVATION_DATE")

    @Temporal(TemporalType.DATE)

    private Date reservationDate;


    @Column(name = "PICKUP_DATE")

    @Temporal(TemporalType.DATE)

    private Date pickupDate;


    @Column(name = "RETURN_DATE")

    @Temporal(TemporalType.DATE)

    private Date returnDate;


    @Column(name = "RESERVATION_STATUS")

    private String reservationStatus;


    @ManyToOne

    @JoinColumn(name = "C_ID")

    @JsonIgnoreProperties({
            "rentals",
            "reservations"
    })

    private Customer customer;


    @ManyToOne

    @JoinColumn(name = "V_ID")

    @JsonIgnoreProperties({
            "rentals",
            "reservations"
    })

    private Vehicle vehicle;

}