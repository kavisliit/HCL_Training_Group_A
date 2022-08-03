package com.backend.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.backend.project.entity.Booking;
import com.backend.project.repository.BookingRepository;

@Component
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public Booking addBooking(Booking book) {
        return bookingRepository.save(book);

    }

    public Booking getBooking(int id) {
        return bookingRepository.findById(id).get();
    }
}
