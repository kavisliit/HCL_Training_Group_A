package com.backend.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.User;
import com.backend.project.repository.UserRepository;

@Component
public class UserService {
    private static final String List = null;
    @Autowired
    private UserRepository userRepository;

    public User addUser(User user) {
        return userRepository.save(user);
    }

    public User Login(String email, String password) {
        List<User> users = userRepository.findByEmailAndPassword(email, password);
        if (users.size() > 0) {
            return users.get(0);
        } else {
            return null;
        }
    }

}
