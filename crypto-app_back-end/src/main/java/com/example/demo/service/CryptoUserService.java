package com.example.demo.service;

import java.util.List;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.CryptoUsers;

public interface CryptoUserService {

	public CryptoUsers registerUser(CryptoUsers netflixUser) throws UserAlreadyExistException; //post request - save a user record
	public CryptoUsers findUserbyId(String username) throws UserNotFoundException; // get request - retrieve a record
	public List<CryptoUsers> getAllUser(); //get request - to retrieve all records
	public CryptoUsers deleteAUser(String username); //delete request
	public CryptoUsers updateAUser(CryptoUsers netflixUser); // PUT - PATCH request
	
	
	
	
	
	
	
	
	
}
