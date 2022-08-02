package com.backend.project.service;

import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.backend.project.entity.Destinations;
import com.backend.project.repository.DestinationsRepository;

@Component
public class DestinationService {
    @Autowired
    private DestinationsRepository destinationsRepository;

    public Destinations addDestintion(Destinations des) {
        return destinationsRepository.save(des);
    }

    public List<Destinations> getAll() {
        List<Destinations> list = (List<Destinations>) destinationsRepository.findAll();
        return list;
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

    public Destinations getDestination(int id) {
        return destinationsRepository.findById(id).get();
    }

    public Destinations updatedestinationimage(String name, String type, int id) {
        Destinations des = getDestination(id);
        if (type.equals("m")) {
            des.setMimage(name);
        } else if (type.equals("f")) {
            des.setImage1(name);
        } else if (type.equals("b")) {
            des.setImage2(name);
        } else if (type.equals("i")) {
            des.setImage3(name);
        }

        return destinationsRepository.save(des);
    }

    public Destinations updateplace(Destinations des) {
        return destinationsRepository.save(des);
    }

    public void deletePlace(int id) {
        destinationsRepository.deleteById(id);
    }

    public List<Destinations> filterplaces(String type) {

        return destinationsRepository.findByType(type);

    }

}
