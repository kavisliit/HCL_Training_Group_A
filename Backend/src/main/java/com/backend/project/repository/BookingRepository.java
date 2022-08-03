package com.backend.project.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Booking;

public interface BookingRepository extends CrudRepository<Booking, Integer> {

}
