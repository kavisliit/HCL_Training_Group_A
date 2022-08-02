package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Destinations;

public interface DestinationsRepository extends CrudRepository<Destinations, Integer> {
    public List<Destinations> findByType(String type);
}
