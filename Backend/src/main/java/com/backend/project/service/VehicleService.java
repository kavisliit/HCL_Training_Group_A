package com.backend.project.service;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

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

    public String savePicture(MultipartFile file) {
        try {
            String fileLocation = new File("Backend\\src\\main\\resources\\uploads").getAbsolutePath() + "\\"
                    + file.getOriginalFilename();
            FileOutputStream output = new FileOutputStream(fileLocation);
            output.write(file.getBytes());
            output.close();
            return file.getOriginalFilename();

        } catch (Exception e) {
            throw new RuntimeException("Could not store the file. Error: " + e.getMessage());
        }
    }

    public Vehicle getVehicle(int id) {
        return vehicleRepository.findById(id).get();
    }

    public Vehicle updateVehicleImage(String name, String type, int id) {
        Vehicle vehicle = getVehicle(id);
        if (type.equals("m")) {
            vehicle.setMimage(name);
        } else if (type.equals("f")) {
            vehicle.setFimage(name);
        } else if (type.equals("b")) {
            vehicle.setBimage(name);
        } else if (type.equals("i")) {
            vehicle.setIimage(name);
        }

        return vehicleRepository.save(vehicle);
    }

    public List<Vehicle> getAllVehicles() {
        List<Vehicle> vehicles = (List<Vehicle>) vehicleRepository.findAll();
        return vehicles;
    }

    public Vehicle updateVehicle(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    public void deleteVehicle(int id) {
        vehicleRepository.deleteById(id);
    }

    public List<Vehicle> filterVehicles(String type, String brand) {
        if (type.equals("no")) {
            return vehicleRepository.findByBrand(brand);
        } else if (brand.equals("no")) {
            return vehicleRepository.findByType(type);
        } else {
            return vehicleRepository.findByTypeAndBrand(type, brand);
        }

    }

    public List<Vehicle> filterByPrice(int price) {
        return vehicleRepository.findByPriceLessThanEqual(price);
    }

}
