package com.driveease.backend.repository;

import com.driveease.backend.entity.Reservation;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReservationRepository extends CrudRepository<Reservation, Long> {
    List<Reservation> findByCustomerId(Long id);
}
