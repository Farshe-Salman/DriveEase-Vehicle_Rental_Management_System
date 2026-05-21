package com.driveease.backend.controller;

import com.driveease.backend.entity.Branch;

import com.driveease.backend.service.BranchService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/api/branches")

@CrossOrigin("*")

public class BranchController {


    @Autowired

    private BranchService branchService;



    @GetMapping

    public ResponseEntity<List<Branch>>
    getAllBranches() {

        return ResponseEntity.ok(

                branchService.getAllBranches()

        );

    }

}