package com.driveease.backend.service;

import com.driveease.backend.entity.Branch;

import com.driveease.backend.repository.BranchRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class BranchService {


    @Autowired

    private BranchRepository branchRepository;



    public List<Branch> getAllBranches() {

        return branchRepository.findAll();

    }

}