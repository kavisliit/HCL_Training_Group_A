package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Vehicle_Book;

public interface Vehicle_bookRepository extends CrudRepository<Vehicle_Book, Integer> {

    public List<Vehicle_Book> findByVid(int vid);

}
