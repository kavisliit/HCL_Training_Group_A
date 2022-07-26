package com.backend.project.repository;

import org.springframework.data.repository.CrudRepository;

import com.backend.project.entity.User;

public interface UserRepository extends CrudRepository<User, Integer> {

}
