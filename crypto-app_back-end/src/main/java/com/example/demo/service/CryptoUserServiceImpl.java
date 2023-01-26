package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.CryptoUsers;
import com.example.demo.repository.CryptoUserRepo;

@Service
public class CryptoUserServiceImpl implements CryptoUserService {
	
	@Autowired
	CryptoUserRepo cryptoRepo;
	
	@Override
	public CryptoUsers registerUser(CryptoUsers walletUser) throws UserAlreadyExistException {
		return cryptoRepo.save(walletUser);
	}

	@Override
	public CryptoUsers findUserbyId(String emailid) throws UserNotFoundException {
		return cryptoRepo.findById(emailid).get();
	}

	@Override
	public List<CryptoUsers> getAllUser() {
		return cryptoRepo.findAll();
	}

	@Override
	public CryptoUsers deleteAUser(String emailid) {
		CryptoUsers deletedCryptoUser = null;
		
		Optional optional = cryptoRepo.findById(emailid);
		
		if(optional.isPresent()) {
			deletedCryptoUser = cryptoRepo.findById(emailid).get();
			cryptoRepo.deleteById(emailid);
		}
		
		return deletedCryptoUser;
	}

	@Override
	public CryptoUsers updateAUser(CryptoUsers cryptoUser) {
		CryptoUsers updatedCryptUser = null;
		
		Optional optional = cryptoRepo.findById(cryptoUser.getId());
		
		if (optional.isPresent()) {
			CryptoUsers getUser = cryptoRepo.findById(cryptoUser.getId()).get();
			getUser.setName(cryptoUser.getName());
			getUser.setPancardNo(cryptoUser.getPancardNo());
			getUser.setAccno(cryptoUser.getAccno());
			getUser.setMobno(cryptoUser.getMobno());
			getUser.setNewPassword(cryptoUser.getPassword());
//			getUser.setPassword(cryptoUser.getPassword());
			
			updatedCryptUser = cryptoRepo.save(getUser);
		}
		
		return updatedCryptUser;
	}

	
	
}
