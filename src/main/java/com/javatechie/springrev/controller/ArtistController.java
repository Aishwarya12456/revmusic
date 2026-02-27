package com.javatechie.springrev.controller;

import com.javatechie.springrev.entity.ArtistProfile;
import com.javatechie.springrev.service.ArtistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/artists")
public class ArtistController {

    @Autowired
    private ArtistService artistService;

    @PostMapping
    public ResponseEntity<ArtistProfile> createArtist(@RequestBody ArtistProfile artistProfile) {
        ArtistProfile savedArtist = artistService.createArtist(artistProfile);
        return ResponseEntity.ok(savedArtist);
    }

    @GetMapping
    public ResponseEntity<List<ArtistProfile>> getAllArtists() {
        return ResponseEntity.ok(artistService.getAllArtists());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ArtistProfile> getArtistById(@PathVariable Long id) {
        ArtistProfile artist = artistService.getArtistById(id);
        return ResponseEntity.ok(artist);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ArtistProfile> updateArtist(@PathVariable Long id, @RequestBody ArtistProfile artistDetails) {
        ArtistProfile updatedArtist = artistService.updateArtist(id, artistDetails);
        return ResponseEntity.ok(updatedArtist);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteArtist(@PathVariable Long id) {
        artistService.deleteArtist(id);
        return ResponseEntity.ok("Artist deleted successfully");
    }
}