package com.javatechie.springrev.service;


import com.javatechie.springrev.dto.FavoriteResponse;
import com.javatechie.springrev.entity.Favorite;
import com.javatechie.springrev.entity.Song;
import com.javatechie.springrev.entity.User;
import com.javatechie.springrev.repository.FavoriteRepository;
import com.javatechie.springrev.repository.SongRepository;
import com.javatechie.springrev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SongRepository songRepository;

    public Favorite addFavorite(Long userId, Long songId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Song song = songRepository.findById(songId).orElseThrow(() -> new RuntimeException("Song not found"));
        Favorite favorite = new Favorite();
        favorite.setUser(user);
        favorite.setSong(song);
        return favoriteRepository.save(favorite);
    }

    public List<FavoriteResponse> getFavoritesByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return favoriteRepository.findByUser(user)
                .stream()
                .map(fav -> {
                    FavoriteResponse resp = new FavoriteResponse();
                    resp.setSongId(fav.getSong().getId());
                    resp.setSongTitle(fav.getSong().getTitle());
                    resp.setArtistName(fav.getSong().getArtist().getName());
                    return resp;
                }).collect(Collectors.toList());
    }

    public void removeFavorite(Long userId, Long songId) {
        favoriteRepository.deleteByUserIdAndSongId(userId, songId);
    }
}