package com.driveease.backend.repository;


import com.driveease.backend.entity.Rental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RentalRepository extends JpaRepository<Rental, Long> {
    List<Rental> findByCustomerId(Long Id);

    @Query(

            "SELECT COALESCE(SUM(r.totalCost),0) FROM Rental r"

    )

    Double getTotalRevenue();

    @Query(

            value = """

            SELECT *

            FROM (

                SELECT *

                FROM RENTAL

                ORDER BY RENT_ID DESC

            )

            WHERE ROWNUM <= 5

            """,

            nativeQuery = true

    )

    List<Rental> getRecentRentals();
}
