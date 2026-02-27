package com.javatechie.springrev.controller;


import com.javatechie.springrev.entity.Playlist;
import com.javatechie.springrev.service.PlaylistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/playlists")
public class PlaylistController {

    @Autowired
    private PlaylistService playlistService;

    @PostMapping("/{userId}")
    public ResponseEntity<Playlist> createPlaylist(@PathVariable Long userId, @RequestBody Playlist playlist) {
        Playlist savedPlaylist = playlistService.createPlaylist(userId, playlist);
        return ResponseEntity.ok(savedPlaylist);
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<Playlist>> getUserPlaylists(@PathVariable Long userId) {
        return ResponseEntity.ok(playlistService.getPlaylistsByUser(userId));
    }

    @PutMapping("/{playlistId}")
    public ResponseEntity<Playlist> updatePlaylist(@PathVariable Long playlistId, @RequestBody Playlist playlist) {
        Playlist updated = playlistService.updatePlaylist(playlistId, playlist);
        return ResponseEntity.ok(updated);
    }

    @DeleteMapping("/{playlistId}")
    public ResponseEntity<String> deletePlaylist(@PathVariable Long playlistId) {
        playlistService.deletePlaylist(playlistId);
        return ResponseEntity.ok("Playlist deleted successfully");
    }

    @PostMapping("/{playlistId}/song/{songId}")
    public ResponseEntity<String> addSongToPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        playlistService.addSongToPlaylist(playlistId, songId);
        return ResponseEntity.ok("Song added to playlist");
    }

    @DeleteMapping("/{playlistId}/song/{songId}")
    public ResponseEntity<String> removeSongFromPlaylist(@PathVariable Long playlistId, @PathVariable Long songId) {
        playlistService.removeSongFromPlaylist(playlistId, songId);
        return ResponseEntity.ok("Song removed from playlist");
    }
}