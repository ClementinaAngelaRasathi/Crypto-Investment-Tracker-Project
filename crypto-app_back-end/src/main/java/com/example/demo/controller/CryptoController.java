package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.JWTRequest;
import com.example.demo.model.JWTResponse;
import com.example.demo.model.CryptoUsers;
import com.example.demo.service.MyUserDetailService;
import com.example.demo.service.CryptoUserService;
import com.example.demo.util.JWTUtility;


@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})
public class CryptoController {
	
	@Autowired
	CryptoUserService cryptoServ;
	
	@Autowired
	AuthenticationManager manager;
	
	@Autowired
	MyUserDetailService userDetailService;
	
	@Autowired
	JWTUtility jwtUtitlity;


	
	@PostMapping("/cryptousers")
	public ResponseEntity<CryptoUsers> resgisterUser(@RequestBody CryptoUsers crytpoUsers) throws UserAlreadyExistException{
		return new ResponseEntity<CryptoUsers>(cryptoServ.registerUser(crytpoUsers),HttpStatus.CREATED);
	}
	
	@GetMapping("/cryptousers")
	public ResponseEntity<List<CryptoUsers>> getAllUser(){
		return new ResponseEntity<List<CryptoUsers>>(cryptoServ.getAllUser(), HttpStatus.OK);
	}
	
	@GetMapping("/cryptousers/{emailid}")
	public ResponseEntity<CryptoUsers> findAUserbyId(@PathVariable String emailid) throws UserNotFoundException{
		return new ResponseEntity<CryptoUsers>(cryptoServ.findUserbyId(emailid), HttpStatus.OK);
	}
	
	@DeleteMapping("/cryptousers/{emailid}")
	public ResponseEntity<CryptoUsers> deleteAUserbyId(@PathVariable String emailid){
		return new ResponseEntity<CryptoUsers>(cryptoServ.deleteAUser(emailid),HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/cryptousers")
	public ResponseEntity<CryptoUsers> updateAUser(@RequestBody CryptoUsers updatedCryptoUser){
		return new ResponseEntity<CryptoUsers>(cryptoServ.updateAUser(updatedCryptoUser),HttpStatus.CREATED);
	}
	
	
	@PostMapping("/login")
	public JWTResponse login(@RequestBody JWTRequest request) throws Exception {
		
try {
			
			manager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getEmailid(), request.getPassword())	
					);
			
		}
		catch( BadCredentialsException e ){
			throw new Exception("Wrong_Emailid_or_Password");
		}
		
		UserDetails userdetail = userDetailService.loadUserByUsername(request.getEmailid());
		
		String generateToken = jwtUtitlity.generateToken(userdetail);
		return new JWTResponse(generateToken);

		
	}
	
	
	
	
}
