package com.backend.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.project.entity.Vehicle;
import com.backend.project.service.VehicleService;

@RestController
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/add")
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        System.out.println(vehicle.getLocation());
        return vehicleService.addVehicle(vehicle);
    }

}
