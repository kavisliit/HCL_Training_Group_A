package com.backend.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.backend.project.entity.Vehicle;
import com.backend.project.service.VehicleService;

@RestController
@RequestMapping("/vehicles")
@ResponseBody
@CrossOrigin(origins = "http://localhost:4200")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping("/add")
    public Vehicle createVehicle(@RequestBody Vehicle vehicle) {
        System.out.println("awa");
        return vehicleService.addVehicle(vehicle);
    }

    @PostMapping("/upload/{id}")
    public Vehicle addPicture(@RequestParam("file") MultipartFile file, @RequestParam("name") String type,
            @PathVariable int id) {

        String name = vehicleService.savePicture(file);
        Vehicle vehicle = vehicleService.updateVehicleImage(name, type, id);
        return vehicle;
    }

    @GetMapping("get/{id}")
    public Vehicle getOneVehicle(@PathVariable int id) {
        return vehicleService.getVehicle(id);
    }

    @GetMapping("")
    public List<Vehicle> getAllVehicle() {
        return vehicleService.getAllVehicles();
    }

    @PutMapping("update/{id}")
    public Vehicle updateVehicle(@RequestBody Vehicle vehicle) {
        return vehicleService.updateVehicle(vehicle);
    }

    @DeleteMapping("delete/{id}")
    public boolean deleteVehicle(@PathVariable int id) {
        vehicleService.deleteVehicle(id);
        return true;
    }

    @PostMapping("filter")
    public List<Vehicle> filterVehicles(@RequestParam("type") String type, @RequestParam("brand") String brand) {
        return vehicleService.filterVehicles(type, brand);
    }

    @PostMapping("filterprice")
    public List<Vehicle> filterByPrice(@RequestParam("price") int price) {
        return vehicleService.filterByPrice(price);
    }

}
