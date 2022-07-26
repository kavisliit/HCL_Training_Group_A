package com.backend.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.backend.project.model.Hotel;



@Repository
public interface HotelRepository extends JpaRepository<Hotel, Long> {

}
