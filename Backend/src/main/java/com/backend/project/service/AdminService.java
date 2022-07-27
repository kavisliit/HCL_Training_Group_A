package com.backend.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.Admin;
import com.backend.project.repository.AdminRepository;

@Component
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public Admin Login(String email, String password) {
        List<Admin> admins = adminRepository.findByEmailAndPassword(email, password);
        if (admins.size() > 0) {
            return admins.get(0);
        } else {
            return null;
        }
    }
}
