package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Vehicle;

public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {

    public List<Vehicle> findByTypeAndBrand(String type, String brand);

    public List<Vehicle> findByBrand(String brand);

    public List<Vehicle> findByType(String type);

    public List<Vehicle> findByPriceLessThanEqual(int price);

}
