package com.example.demo.controller;

import com.example.demo.model.CryptoUsers;
import com.example.demo.service.CryptoUserService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
public class CryptoUserControllerTest {

    private MockMvc mockMvc;
    @Mock
    CryptoUserService cryptoService;
    @InjectMocks
    private CryptoController cryptoController;

    private CryptoUsers cryptoUsers;
    private List<CryptoUsers> cryptoUserList;


    @BeforeEach
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(cryptoController).build();
        cryptoUsers = new CryptoUsers();
        cryptoUsers.setId("Roger5646@gmail.com");
        cryptoUsers.setName("Roger");
        cryptoUsers.setPancardNo("BGD546");
        cryptoUsers.setMobno((long) 1234567891);
        cryptoUsers.setAccno((long) (4597953));
        cryptoUsers.setPassword("William@04");

        cryptoUserList = new ArrayList<>();
        cryptoUserList.add(cryptoUsers);
    }

    @AfterEach
    public void tearDown() {
    	cryptoUsers = null;
    }

    @Test
    public void givenCryptoUserToSaveThenShouldReturnSavedCryptoUsers() throws Exception {
        when(cryptoService.registerUser(any())).thenReturn(cryptoUsers);
        mockMvc.perform(post("/cryptousers")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(cryptoUsers)))
                .andExpect(status().isCreated())
                .andDo(MockMvcResultHandlers.print());
        verify(cryptoService).registerUser(any());
    }

    @Test
    public void givenGetAllCryptoUsersThenShouldReturnListOfAllCryptoUsers() throws Exception {
        when(cryptoService.getAllUser()).thenReturn(cryptoUserList);
        mockMvc.perform(MockMvcRequestBuilders.get("/cryptousers")
                .contentType(MediaType.APPLICATION_JSON).content(asJsonString(cryptoUsers)))
                .andDo(MockMvcResultHandlers.print());
        verify(cryptoService).getAllUser();
        verify(cryptoService, times(1)).getAllUser();

    }

    @Test
    void givenCryptoUserIdThenShouldReturnRespectiveCryptoUser() throws Exception {
        when(cryptoService.findUserbyId(cryptoUsers.getId())).thenReturn(cryptoUsers);
        mockMvc.perform(get("/cryptousers/Roger5646@gmail.com"))
                .andExpect(MockMvcResultMatchers.status()
                        .isOk())
                .andDo(MockMvcResultHandlers.print());

    }

    @Test
    public void givenCryptoUserIdToDeleteThenShouldNotReturnDeletedCryptoUser() throws Exception {
        when(cryptoService.deleteAUser(cryptoUsers.getId())).thenReturn(cryptoUsers);
        mockMvc.perform(delete("/cryptousers/Roger5646@gmail.com")
                .contentType(MediaType.APPLICATION_JSON)
                .content(asJsonString(cryptoUsers)))
                .andExpect(MockMvcResultMatchers.status().isAccepted()).andDo(MockMvcResultHandlers.print());
    }

    @Test
    public void givenCryptoUserToUpdateThenShouldReturnUpdatedCryptoUser() throws Exception {
        when(cryptoService.updateAUser(any())).thenReturn(cryptoUsers);
        mockMvc.perform(put("/cryptousers").contentType(MediaType.APPLICATION_JSON).content(asJsonString(cryptoUsers)))
                .andExpect(status().isCreated()).andDo(MockMvcResultHandlers.print());
    }

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

}









