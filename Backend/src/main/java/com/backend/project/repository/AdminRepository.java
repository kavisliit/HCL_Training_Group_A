package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.Admin;

public interface AdminRepository extends CrudRepository<Admin, Integer> {

    public List<Admin> findByEmailAndPassword(String email, String password);
}
