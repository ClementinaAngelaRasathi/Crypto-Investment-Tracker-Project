package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.CryptoUsers;

@Repository
public interface CryptoUserRepo extends JpaRepository<CryptoUsers, String> {

}
