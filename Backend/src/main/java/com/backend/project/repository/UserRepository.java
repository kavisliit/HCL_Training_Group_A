package com.backend.project.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {
    public List<User> findByEmailAndPassword(String email, String password);
}
