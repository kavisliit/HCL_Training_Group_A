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
import org.springframework.web.bind.annotation.RestController;

import com.backend.project.entity.TravelGuide;
import com.backend.project.service.TravelGuideService;

@RestController
@RequestMapping("/guide")
@CrossOrigin(origins = "*")
public class TravelGuideController {

    @Autowired
    private TravelGuideService travelGuideService;
    
    @RequestMapping("/test")
    public String test(){
        return "THIS IS TEST MAPPING";
    }

    //save travel guide controller
    @PostMapping("/save")
    public TravelGuide saveGuide(@RequestBody TravelGuide guide){
        return this.travelGuideService.saveGuide(guide);
    }

    //get all travel guides
    @GetMapping("/getAll")
    public List<TravelGuide> getAllTravelGuides(){
        return this.travelGuideService.getAllTravelGuides();
    }

    //get a travel guide from guide id
    @GetMapping("/getGuide/{guideId}")
    public TravelGuide getGuideById(@PathVariable("guideId") int id){
        return this.travelGuideService.getTravelGuideById(id);
    }

    //update a travel guide
    @PutMapping("/updateGuide/{guideId}")
    public TravelGuide updateTravelGuide(@PathVariable("guideId") int id, @RequestBody TravelGuide guide){
        return this.travelGuideService.updateTravelGuide(id, guide);
    }

    //delete a travel guide from id
    @DeleteMapping("/deleteGuide/{guideId}")
    public String deleteTravelGuide(@PathVariable("guideId") int id){
        this.travelGuideService.deleteTravelGuide(id);
        return "guide deleted";
    }
}
