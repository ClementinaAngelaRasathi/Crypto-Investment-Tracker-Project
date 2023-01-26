package com.example.demo.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.demo.exception.UserAlreadyExistException;
import com.example.demo.exception.UserNotFoundException;
import com.example.demo.model.CryptoUsers;
import com.example.demo.repository.CryptoUserRepo;

@ExtendWith(MockitoExtension.class)
public class CryptoUserServiceTest {
	
	@Mock
    private CryptoUserRepo netRepo;
	
	@InjectMocks
    private CryptoUserServiceImpl  cryptoService;
    private CryptoUsers cryptoUsers,cryptoUsers1;
    private List<CryptoUsers> cryptoUserList;
    private Optional optional;

    
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);

        cryptoUsers = new CryptoUsers("Roger5646@gmail.com", "Roger", "chennai", (long) 1234567891, (long) (4597953), "Root12345");
        cryptoUsers1 = new CryptoUsers("Clem545@gmail.com", "Clem","Trichy",(long) 254136413, (long) (54641321),"Clement@04");
        optional = Optional.of(cryptoUsers);
    }


    @AfterEach
    public void tearDown() {
    	cryptoUsers = null;
    }

    @Test
    public void givenCryptoUserToSaveThenShouldReturnSavedCryptoUser() throws UserAlreadyExistException {
        when(netRepo.save(any())).thenReturn(cryptoUsers);
        assertEquals(cryptoUsers, cryptoService.registerUser(cryptoUsers));
        verify(netRepo, times(1)).save(any());
    }

    @Test
    public void givenCryptoUserToSaveThenShouldNotReturnSavedCryptoUser() {
        when(netRepo.save(any())).thenThrow(new RuntimeException());
        Assertions.assertThrows(RuntimeException.class,() -> {
        	cryptoService.registerUser(cryptoUsers);
        });
        verify(netRepo, times(1)).save(any());
    }

    @Test
    public void givenGetAllCryptoUsersThenShouldReturnListOfAllCryptoUsers() {
    	netRepo.save(cryptoUsers);
        //stubbing the mock to return specific data
        when(netRepo.findAll()).thenReturn(cryptoUserList);
        List<CryptoUsers> cryptoUserList1 = cryptoService.getAllUser();
        assertEquals(cryptoUserList, cryptoUserList1);
        verify(netRepo, times(1)).save(cryptoUsers);
        verify(netRepo, times(1)).findAll();
    }

    @Test
    public void givenCryptoUserIdThenShouldReturnRespectiveCryptoUser() throws UserNotFoundException {
        when(netRepo.findById(anyString())).thenReturn(Optional.of(cryptoUsers));
        CryptoUsers retrievedCryptoUser = cryptoService.findUserbyId(cryptoUsers.getId());
        verify(netRepo, times(1)).findById(anyString());

    }

   
    @Test
    void givenCryptoUserIdToDeleteThenShouldReturnDeletedCryptoUser() {
        when(netRepo.findById(cryptoUsers.getId())).thenReturn(optional);
        CryptoUsers deletedCrytpoUser = cryptoService.deleteAUser("Roger5646@gmail.com");
        assertEquals("Roger5646@gmail.com", deletedCrytpoUser.getId());

        verify(netRepo, times(2)).findById(cryptoUsers.getId());
        verify(netRepo, times(1)).deleteById(cryptoUsers.getId());
    }

    @Test
    void givenCryptoUserIdToDeleteThenShouldNotReturnDeletedNCryptoUser() {
        when(netRepo.findById(cryptoUsers.getId())).thenReturn(Optional.empty());
        CryptoUsers deletedCryptoUser = cryptoService.deleteAUser("Roger5646@gmail.com");
        verify(netRepo, times(1)).findById(cryptoUsers.getId());
    }
    
    @Test
    public void giveCryptoUserToUpdateThenShouldReturnUpdatedCryptoUser() {
        when(netRepo.findById(cryptoUsers.getId())).thenReturn(optional);
        when(netRepo.save(cryptoUsers)).thenReturn(cryptoUsers);
        cryptoUsers.setId("Roger5646@gmail.com");
        CryptoUsers cryptoUsers1 = cryptoService.updateAUser(cryptoUsers);
        assertEquals(cryptoUsers1.getId(), "Roger5646@gmail.com");
        verify(netRepo, times(1)).save(cryptoUsers);
        verify(netRepo, times(2)).findById(cryptoUsers.getId());
    }

    @Test
    public void givenCryptoUserToUpdateThenShouldNotReturnUpdatedCryptoUser() {
        when(netRepo.findById(cryptoUsers.getId())).thenReturn(Optional.empty());
        CryptoUsers cryptoUsers1 = cryptoService.updateAUser(cryptoUsers);
        assertNull(cryptoUsers1);
        verify(netRepo, times(1)).findById(cryptoUsers.getId());
    }


}
