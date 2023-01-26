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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Watchlist;
import com.example.demo.repository.WatchlistRepo;
import com.example.demo.service.WatchlistService;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000"})

public class WatchlistController {

	@Autowired
	private WatchlistService watchServ;
	
	@Autowired
	private WatchlistRepo watchRepo;
	
	
	@PostMapping("/watchlist")
	public ResponseEntity<Watchlist> addAWatchlist(@RequestBody Watchlist watchlist){
		return new ResponseEntity<Watchlist>(watchServ.addAWatchlist(watchlist),HttpStatus.CREATED);
	}

	@GetMapping("/watchlist/{id}")
	public ResponseEntity<Watchlist> findAWatchlist(@PathVariable Long id){
		return new ResponseEntity<Watchlist>(watchServ.findAWatchlist(id),HttpStatus.OK);
	}
	
	@GetMapping("/watchlists")
	public ResponseEntity<List<Watchlist>> findAllWatchlists(){
		return new ResponseEntity<List<Watchlist>>(watchServ.findAllWathclist(),HttpStatus.OK);
	}

	@PutMapping("/watchlist")
	public ResponseEntity<Watchlist> updateAWath(@RequestBody Watchlist bankuser){
		return new ResponseEntity<Watchlist>(watchServ.updateAWatchlist(bankuser),HttpStatus.OK);
	}
	
	@DeleteMapping("/watchlist/{id}")
	public ResponseEntity<Watchlist> deleteAWatchlist(@PathVariable Long id){
		return new ResponseEntity<Watchlist>(watchServ.deleteAWatchlist(id),HttpStatus.OK);
	}

	@GetMapping("/watchlist/emailid")
	public ResponseEntity<List<Watchlist>> findWatchlistsByEmail(@RequestParam String emailid){
		return new ResponseEntity<List<Watchlist>>(watchRepo.findByEmailid(emailid), HttpStatus.OK);
	}
	
}
