package com.backend.project.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.backend.project.entity.ResourceNotFoundException;
import com.backend.project.model.Hotel;
import com.backend.project.repository.HotelRepository;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/")
public class HotelController {
	
	@Autowired
	private HotelRepository hotelRepository;
	
	//get all hotels	
	@GetMapping("/hotels")
	public List<Hotel> getAllHotels(){
		return hotelRepository.findAll();
	}
	
	//create employee rest api
	@PostMapping("/hotels")
	public Hotel createHotel(@RequestBody Hotel hotel) {
		return hotelRepository.save(hotel);
	}
	
	// get hotel by id rest api
	@GetMapping("/hotels/{id}")
	public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
		Hotel hotel = hotelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		return ResponseEntity.ok(hotel);
	}
	
	// update hotel rest api
	
	@PutMapping("/hotels/{id}")
	public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody Hotel hotelDetails){
		Hotel hotel = hotelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		
		hotel.setHotelName(hotelDetails.getHotelName());
		hotel.setManagerName(hotelDetails.getManagerName());
		hotel.setEmailId(hotelDetails.getEmailId());
		
		Hotel updatedHotel = hotelRepository.save(hotel);
		return ResponseEntity.ok(updatedHotel);
	}
	
	
	// delete hotel rest api
	@DeleteMapping("/hotels/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteHotel(@PathVariable Long id){
		Hotel hotel = hotelRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Hotel not exist with id :" + id));
		
		hotelRepository.delete(hotel);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
