package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.EnquiryForm;
import com.example.demo.repository.EnquiryFormRepo;

@Service
public class EnquiryFormServiceImpl implements EnquiryFormService {

	
	@Autowired
	EnquiryFormRepo enquiryrepo;
	
	@Override
	public EnquiryForm saveAEnquiry(EnquiryForm enquiryform) {
		// TODO Auto-generated method stub
		return enquiryrepo.save(enquiryform);

	}

	@Override
	public EnquiryForm findAEnquiry(String id) {
		// TODO Auto-generated method stub
		return enquiryrepo.findById(id).get();

	}

	@Override
	public List<EnquiryForm> findAllenquiries() {
		// TODO Auto-generated method stub
		return enquiryrepo.findAll();

	}

}
