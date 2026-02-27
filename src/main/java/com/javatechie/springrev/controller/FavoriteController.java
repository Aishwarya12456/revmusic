package com.javatechie.springrev.controller;

import com.javatechie.springrev.dto.FavoriteResponse;
import com.javatechie.springrev.entity.Favorite;
import com.javatechie.springrev.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
public class FavoriteController {

    @Autowired
    private FavoriteService favoriteService;

    @PostMapping("/{userId}/song/{songId}")
    public ResponseEntity<Favorite> addFavorite(@PathVariable Long userId, @PathVariable Long songId) {
        Favorite favorite = favoriteService.addFavorite(userId, songId);
        return ResponseEntity.ok(favorite);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<FavoriteResponse>> getFavorites(@PathVariable Long userId) {
        return ResponseEntity.ok(favoriteService.getFavoritesByUser(userId));
    }

    @DeleteMapping("/{userId}/song/{songId}")
    public ResponseEntity<String> removeFavorite(@PathVariable Long userId, @PathVariable Long songId) {
        favoriteService.removeFavorite(userId, songId);
        return ResponseEntity.ok("Favorite removed successfully");
    }
}