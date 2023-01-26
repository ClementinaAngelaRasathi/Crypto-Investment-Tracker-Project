package com.example.demo.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.demo.model.EnquiryForm;

public interface EnquiryFormService {

	
	public EnquiryForm saveAEnquiry(EnquiryForm enquiryform);
	public EnquiryForm findAEnquiry(String id);
	public List<EnquiryForm> findAllenquiries();


}
