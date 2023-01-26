package com.example.demo.repositoryTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.example.demo.model.CryptoUsers;
import com.example.demo.repository.CryptoUserRepo;

@SpringBootTest
public class CryptoRepoTest {
		
	@Autowired
    private CryptoUserRepo cryptoRepo;
    private CryptoUsers cryptoUsers;

    @BeforeEach
    public void setUp() {
    	cryptoUsers = new CryptoUsers();
    	cryptoUsers.setId("Roger5646@gmail.com");
    	cryptoUsers.setName("Roger");
    	cryptoUsers.setPancardNo("chennai");
    	cryptoUsers.setMobno((long) 1234567891);
    	cryptoUsers.setAccno((long) (4597953));
    	cryptoUsers.setPassword("William@04");

    }
    
    @AfterEach
    public void tearDown() {
    	cryptoRepo.deleteAll();
    	cryptoUsers = null;
    }
    
    @Test
    public void givenCryptoUserToSaveThenShouldReturnSavedCryptoUser() {
    	cryptoRepo.save(cryptoUsers);
    	CryptoUsers fetchedUsers =cryptoRepo.findById(cryptoUsers.getId()).get();
        assertEquals(19, fetchedUsers.getId().length());
    }


    @Test
    public void givenGetAllCryptoUsersThenShouldReturnListOfAllCryptoUsers() {
    	CryptoUsers cryptoUsers = new CryptoUsers("Roger5646@gmail.com", "Roger", "chennai", (long) 1234567891, (long) (4597953), "Root12345");
    	CryptoUsers cryptoUsers1 = new CryptoUsers("Clem545@gmail.com", "Clem","Trichy",(long) 254136413, (long) (54641321),"Clement@04");
    	cryptoRepo.save(cryptoUsers);
    	cryptoRepo.save(cryptoUsers1);

        List<CryptoUsers> blogList = (List<CryptoUsers>)  cryptoRepo.findAll();
        assertEquals("Roger", blogList.get(1).getName());
    }

    @Test
    public void givenCryptoUserIdThenShouldReturnRespectiveCryptoUser() {
    	CryptoUsers cryptoUsers = new CryptoUsers("Roger5646@gmail.com", "Roger", "chennai", (long) 1234567891, (long) (4597953), "Root12345");
    	CryptoUsers cryptoUsers1 = cryptoRepo.save(cryptoUsers);
        Optional<CryptoUsers> optional = cryptoRepo.findById(cryptoUsers1.getId());
        assertEquals(cryptoUsers1.getId(), optional.get().getId());
        assertEquals(cryptoUsers1.getName(), optional.get().getName());
        assertEquals(cryptoUsers1.getPancardNo(), optional.get().getPancardNo());
        assertEquals(cryptoUsers1.getAccno(), optional.get().getAccno());
        assertEquals(cryptoUsers1.getMobno(), optional.get().getMobno());
        assertEquals(cryptoUsers1.getPassword(), optional.get().getPassword());

    }
    
    @Test
    public void givenCryptoUserIdToDeleteThenShouldReturnDeletedCryptoUser() {
    	CryptoUsers cryptoUsers = new CryptoUsers("Roger5646@gmail.com", "Roger", "chennai", (long) 1234567891, (long) (4597953), "Root12345");
    	cryptoRepo.save(cryptoUsers);
    	cryptoRepo.deleteById(cryptoUsers.getId());
        Optional optional = cryptoRepo.findById(cryptoUsers.getId());
        assertEquals(Optional.empty(), optional);
    }



    
}