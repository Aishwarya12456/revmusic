package com.javatechie.springrev.controller;

import com.javatechie.springrev.dto.SongRequest;
import com.javatechie.springrev.dto.SongResponse;
import com.javatechie.springrev.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class SongController {

    @Autowired
    private SongService songService;

    // Create a new song
    @PostMapping
    public ResponseEntity<SongResponse> createSong(@RequestBody SongRequest request) {
        return ResponseEntity.ok(songService.createSong(request));
    }

    // Get all songs
    @GetMapping
    public ResponseEntity<List<SongResponse>> getAllSongs() {
        return ResponseEntity.ok(songService.getAllSongs());
    }

    // Get song by ID
    @GetMapping("/{id}")
    public ResponseEntity<SongResponse> getSongById(@PathVariable Long id) {
        return ResponseEntity.ok(songService.getSongById(id));
    }

    // Update song by ID
    @PutMapping("/{id}")
    public ResponseEntity<SongResponse> updateSong(@PathVariable Long id, @RequestBody SongRequest request) {
        return ResponseEntity.ok(songService.updateSong(id, request));
    }

    // Delete song by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSong(@PathVariable Long id) {
        songService.deleteSong(id);
        return ResponseEntity.ok("Song deleted successfully");
    }
}