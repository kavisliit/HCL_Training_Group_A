package com.backend.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.project.entity.Vehicle;
import com.backend.project.entity.Vehicle_Book;
import com.backend.project.service.Vehicle_bookService;

@RestController
@ResponseBody
@RequestMapping("/vehiclebook")
@CrossOrigin(origins = "http://localhost:4200")
public class Vehhicle_BookController {
    @Autowired
    private Vehicle_bookService vehicle_bookService;

    @PostMapping("/add")
    public Vehicle_Book createBooking(@RequestBody Vehicle_Book book) {
        return vehicle_bookService.addBooking(book);
    }

    @PostMapping("/check")
    public boolean checkAvailability(@RequestBody Vehicle_Book book) {
        return vehicle_bookService.checkAvailability(book);
    }

    @GetMapping("/checkhave/{uid}")
    public Vehicle checkBookingHave(@PathVariable("uid") int uid) {
        return vehicle_bookService.checkBookingHave(uid);
    }

}
