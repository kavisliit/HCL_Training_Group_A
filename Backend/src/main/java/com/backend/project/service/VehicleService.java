package com.backend.project.service;

import java.io.File;
import java.io.FileOutputStream;

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

}
