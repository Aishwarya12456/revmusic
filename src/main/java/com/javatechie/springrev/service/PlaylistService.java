package com.javatechie.springrev.service;


import com.javatechie.springrev.entity.*;
import com.javatechie.springrev.repository.PlaylistRepository;
import com.javatechie.springrev.repository.PlaylistSongRepository;
import com.javatechie.springrev.repository.SongRepository;
import com.javatechie.springrev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlaylistService {

    @Autowired
    private PlaylistRepository playlistRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private PlaylistSongRepository playlistSongRepository;

    public Playlist createPlaylist(Long userId, Playlist playlist) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        playlist.setUser(user);
        return playlistRepository.save(playlist);
    }

    public List<Playlist> getPlaylistsByUser(Long userId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        return playlistRepository.findByUser(user);
    }

    public Playlist updatePlaylist(Long playlistId, Playlist playlistDetails) {
        Playlist playlist = playlistRepository.findById(playlistId)
                .orElseThrow(() -> new RuntimeException("Playlist not found"));
        playlist.setName(playlistDetails.getName());
        return playlistRepository.save(playlist);
    }

    public void deletePlaylist(Long playlistId) {
        Playlist playlist = playlistRepository.findById(playlistId)
                .orElseThrow(() -> new RuntimeException("Playlist not found"));
        playlistRepository.delete(playlist);
    }

    public void addSongToPlaylist(Long playlistId, Long songId) {
        Playlist playlist = playlistRepository.findById(playlistId)
                .orElseThrow(() -> new RuntimeException("Playlist not found"));
        Song song = songRepository.findById(songId)
                .orElseThrow(() -> new RuntimeException("Song not found"));

        PlaylistSong ps = new PlaylistSong();
        PlaylistSongId psId = new PlaylistSongId();
        psId.setPlaylistId(playlistId);
        psId.setSongId(songId);

        ps.setId(psId);
        ps.setPlaylist(playlist);
        ps.setSong(song);

        playlistSongRepository.save(ps);
    }

    public void removeSongFromPlaylist(Long playlistId, Long songId) {
        PlaylistSongId psId = new PlaylistSongId();
        psId.setPlaylistId(playlistId);
        psId.setSongId(songId);
        playlistSongRepository.deleteById(psId);
    }
}