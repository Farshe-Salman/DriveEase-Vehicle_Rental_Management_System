package com.driveease.backend.entity;

import jakarta.persistence.*;

import lombok.*;

import java.util.Date;

@Entity

@Table(name = "EMPLOYEE")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class Employee {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "employee_seq_gen"
    )

    @SequenceGenerator(
            name = "employee_seq_gen",
            sequenceName = "EMPLOYEE_SEQ",
            allocationSize = 1
    )

    @Column(name = "E_ID")

    private Long id;



    @Column(name = "E_NAME")

    private String fullName;



    @Column(name = "HIRE_DATE")

    @Temporal(TemporalType.DATE)

    private Date hireDate;



    @Column(name = "POSITION")

    private String position;



    @ManyToOne

    @JoinColumn(name = "B_ID")

    private Branch branch;

}