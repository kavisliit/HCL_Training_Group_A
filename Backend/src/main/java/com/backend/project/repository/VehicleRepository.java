package com.backend.project.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Vehicle;

public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {

}
