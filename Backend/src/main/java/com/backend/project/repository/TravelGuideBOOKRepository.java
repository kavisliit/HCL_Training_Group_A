package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.BookGuide;

public interface TravelGuideBOOKRepository extends CrudRepository<BookGuide, Integer>{
    List<BookGuide> findById(int id);
}
