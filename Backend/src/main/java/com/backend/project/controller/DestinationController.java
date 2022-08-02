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

import com.backend.project.entity.Destinations;
import com.backend.project.service.DestinationService;

@RestController
@RequestMapping("/places")
@ResponseBody
@CrossOrigin(origins = "http://localhost:4200")
public class DestinationController {

    @Autowired
    private DestinationService destinationService;

    @PostMapping("/add")
    public Destinations addDestination(@RequestBody Destinations destinations) {
        return destinationService.addDestintion(destinations);
    }

    @GetMapping("/all")
    public List<Destinations> getAll() {
        return destinationService.getAll();
    }

    @PostMapping("/upload/{id}")
    public Destinations addPicture(@RequestParam("file") MultipartFile file, @RequestParam("name") String type,
            @PathVariable int id) {

        String name = destinationService.savePicture(file);
        Destinations des = destinationService.updatedestinationimage(name, type, id);
        return des;
    }

    @GetMapping("/get/{id}")
    public Destinations getOne(@PathVariable("id") int id) {
        return destinationService.getDestination(id);
    }

    @PutMapping("update/{id}")
    public Destinations updatePlace(@RequestBody Destinations vehicle) {
        return destinationService.updateplace(vehicle);
    }

    @DeleteMapping("delete/{id}")
    public boolean deletePlace(@PathVariable int id) {
        destinationService.deletePlace(id);
        return true;
    }

    @PostMapping("filter")
    public List<Destinations> filterVehicles(@RequestParam("type") String type) {
        return destinationService.filterplaces(type);
    }

}
