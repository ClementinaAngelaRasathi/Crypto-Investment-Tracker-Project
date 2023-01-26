package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Watchlist;
import com.example.demo.repository.WatchlistRepo;

@Service
public class WatchlistServiceImpl implements WatchlistService {

	@Autowired
	private WatchlistRepo watchlistRepo;

	
	@Override
	public Watchlist findAWatchlist(Long id) {
		// TODO Auto-generated method stub
		return watchlistRepo.findById(id).get();

	}

	@Override
	public List<Watchlist> findAllWathclist() {
		// TODO Auto-gen	erated method stub
		return watchlistRepo.findAll();

	}

	@Override
	public Watchlist addAWatchlist(Watchlist watchlist) {
		// TODO Auto-generated method stub
		return watchlistRepo.save(watchlist);

	}

	@Override
	public Watchlist updateAWatchlist(Watchlist watchlist) {
		// TODO Auto-generated method stub
		Watchlist updatedWatchlist = null;
		Optional optional = watchlistRepo.findById(watchlist.getId());
		
		if(optional.isPresent()) {
			Watchlist getWatchlist = watchlistRepo.findById(watchlist.getId()).get();
			getWatchlist.setName(watchlist.getName());
			getWatchlist.setPricechange(watchlist.getCurrentprice());
			getWatchlist.setLastupdated(watchlist.getLastupdated());
			getWatchlist.setCurrentprice(watchlist.getPricechange());
			getWatchlist.setEmailid(watchlist.getEmailid());
			updatedWatchlist = watchlistRepo.save(getWatchlist);
		}
		return updatedWatchlist;

	}

	@Override
	public Watchlist deleteAWatchlist(Long id) {
		// TODO Auto-generated method stub
		Watchlist watchlistToBeDeleted = null;
		Optional optional = watchlistRepo.findById(id);
		if (optional.isPresent()) {
			watchlistToBeDeleted = watchlistRepo.findById(id).get();
			watchlistRepo.deleteById(id);
		}
		return watchlistToBeDeleted;
	}
	}

	
	
