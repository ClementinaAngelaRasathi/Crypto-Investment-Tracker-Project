package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Watchlist;

public interface WatchlistService {

	
			//Get A watchlist
			public Watchlist findAWatchlist(Long id);
			
			//Get All watchlist
			public List<Watchlist> findAllWathclist();
			
			//Save A watchlist
			public Watchlist addAWatchlist(Watchlist watchlist);
			
			//Update a watchlist
			public Watchlist updateAWatchlist(Watchlist watchlist);
			
			//Delete a watchlist
			public Watchlist deleteAWatchlist(Long id);

}
