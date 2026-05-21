package com.driveease.backend.repository;

import com.driveease.backend.entity.Branch;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BranchRepository
        extends JpaRepository<Branch, Long> {
}