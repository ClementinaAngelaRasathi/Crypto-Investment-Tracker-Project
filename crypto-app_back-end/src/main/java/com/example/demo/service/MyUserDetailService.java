package com.example.demo.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.CryptoUsers;
import com.example.demo.repository.CryptoUserRepo;

@Service
public class MyUserDetailService implements UserDetailsService {

	
	@Autowired
	CryptoUserRepo walletUserRepo; 
	
	@Override
	public UserDetails loadUserByUsername(String emailId) throws UsernameNotFoundException {
		
		 CryptoUsers walletUser = walletUserRepo.findById(emailId).get();
		 
		return new User(walletUser.getId(), walletUser.getPassword(), new ArrayList<>()) ;
//		 return new User("Clementina","password", new ArrayList<>());
	}

}
