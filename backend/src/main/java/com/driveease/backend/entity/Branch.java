package com.driveease.backend.entity;

import jakarta.persistence.*;

import lombok.*;

@Entity

@Table(name = "BRANCH")

@Getter
@Setter

@NoArgsConstructor
@AllArgsConstructor

public class Branch {


    @Id

    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "branch_seq_gen"
    )

    @SequenceGenerator(
            name = "branch_seq_gen",
            sequenceName = "BRANCH_SEQ",
            allocationSize = 1
    )

    @Column(name = "B_ID")

    private Long id;



    @Column(name = "BRANCH_NAME")

    private String branchName;



    @Column(name = "LOCATION")

    private String location;

}