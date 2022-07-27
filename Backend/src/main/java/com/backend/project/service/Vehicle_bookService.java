package com.backend.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.Vehicle;
import com.backend.project.entity.Vehicle_Book;
import com.backend.project.repository.VehicleRepository;
import com.backend.project.repository.Vehicle_bookRepository;

@Component
public class Vehicle_bookService {
    @Autowired
    private Vehicle_bookRepository vehicle_bookRepository;
    @Autowired
    private VehicleRepository vehicleRepository;

    public Vehicle_Book addBooking(Vehicle_Book vehicle_Book) {
        return vehicle_bookRepository.save(vehicle_Book);
    }

    public boolean checkAvailability(Vehicle_Book book) {
        List<Vehicle_Book> bookings = vehicle_bookRepository.findByVid(book.getVid());
        int count = 0;
        for (Vehicle_Book vb : bookings) {
            if (book.getSdate().equals(vb.getSdate())) {
                count++;
                continue;
            }
            if (book.getSdate().before(vb.getEdate()) && book.getSdate().after(vb.getSdate())) {
                count++;
                continue;
            }
            if (book.getSdate().equals(vb.getEdate())) {
                count++;
                continue;
            }
            if (book.getEdate().equals(vb.getSdate())) {
                count++;
                continue;
            }
            if (book.getEdate().before(vb.getEdate()) && book.getEdate().after(vb.getSdate())) {
                count++;
                continue;
            }
            if (book.getEdate().equals(vb.getEdate())) {
                count++;
                continue;
            }
        }
        if (count > 0) {
            return false;
        } else {
            return true;
        }
    }

    public Vehicle checkBookingHave(int uid) {
        List<Vehicle_Book> books = vehicle_bookRepository.findByUserid(uid);
        if (books.size() > 0) {
            Vehicle vehicle = vehicleRepository.findById(books.get(0).getVid()).get();
            return vehicle;
        } else {
            return null;
        }
    }

}
