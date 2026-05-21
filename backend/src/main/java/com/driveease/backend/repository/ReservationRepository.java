package com.driveease.backend.repository;

import com.driveease.backend.entity.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByCustomerId(Long id);

    @Query(

            value = """

            SELECT *

            FROM (

                SELECT *

                FROM RESERVATION

                ORDER BY RESERVATION_ID DESC

            )

            WHERE ROWNUM <= 5

            """,

            nativeQuery = true

    )

    List<Reservation> getRecentReservations();
}
