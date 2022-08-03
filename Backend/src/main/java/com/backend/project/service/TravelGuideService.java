package com.backend.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.TravelGuide;
import com.backend.project.repository.TravelGuideRepository;

@Component
public class TravelGuideService {
    
    @Autowired
    private TravelGuideRepository travelGuideRepository;

    //save a travel guide
    public TravelGuide saveGuide(TravelGuide guide){
        return this.travelGuideRepository.save(guide);
    }

    //get All travel guides
    public List<TravelGuide> getAllTravelGuides(){
        List<TravelGuide> guides = (List<TravelGuide>) this.travelGuideRepository.findAll();
        return guides;
    }

    //get a travel guide from id
    public TravelGuide getTravelGuideById(int id){
        return this.travelGuideRepository.findByGuideId(id).get(0);
    }

    //update a travel guide from id
    public TravelGuide updateTravelGuide(int guideId, TravelGuide guide){
        TravelGuide g = this.travelGuideRepository.findByGuideId(guideId).get(0);
        g.setAge(guide.getAge());
        g.setGuideLevel(guide.getGuideLevel());
        g.setGuideName(guide.getGuideName());
        g.setLanguages(guide.getLanguages());
        g.setGuideImage(guide.getGuideImage());

        return this.travelGuideRepository.save(g);
    }

    //delete a travel guide from id
    public void deleteTravelGuide(int guideId){
        this.travelGuideRepository.deleteById(guideId);
    }
}
