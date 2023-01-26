package com.example.demo.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document
@AllArgsConstructor
@NoArgsConstructor
@Data

public class EnquiryForm {

	
	@MongoId
	private String id;
	private String name;
	private String emailid;
	private String subject;
	private String message;
	
	
	
}
