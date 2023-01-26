package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.EnquiryForm;
import com.example.demo.service.EnquiryFormService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class EnquiryFormController {

	
	@Autowired
	EnquiryFormService enquiryService;
	
	
	@PostMapping("/enquiry")
	public ResponseEntity<EnquiryForm> saveAEnquiry(@RequestBody EnquiryForm enquiryForm){
		return new ResponseEntity<EnquiryForm>(enquiryService.saveAEnquiry(enquiryForm), HttpStatus.CREATED);
	}

	@GetMapping("/enquiry/{id}")
	public ResponseEntity<EnquiryForm> findAEnquiry(@PathVariable String id){
		return new ResponseEntity<EnquiryForm>(enquiryService.findAEnquiry(id), HttpStatus.OK);
	}
	
	@GetMapping("/enquiries")
	public ResponseEntity<List<EnquiryForm>> findAllenquiries(){
		return new ResponseEntity<List<EnquiryForm>>(enquiryService.findAllenquiries(), HttpStatus.OK);
	}


}
