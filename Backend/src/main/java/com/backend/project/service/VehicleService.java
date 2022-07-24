package com.backend.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.Vehicle;
import com.backend.project.repository.VehicleRepository;

@Component
public class VehicleService {

    @Autowired
    private VehicleRepository vehicleRepository;

    public Vehicle addVehicle(Vehicle vehicle) {
        Vehicle ve = vehicleRepository.save(vehicle);
        return ve;
    }

}
