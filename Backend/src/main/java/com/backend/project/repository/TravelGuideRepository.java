package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.TravelGuide;

public interface TravelGuideRepository extends CrudRepository<TravelGuide, Integer>{

    List<TravelGuide> findByGuideId(int guideId);
    
}
