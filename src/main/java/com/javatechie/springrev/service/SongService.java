package com.javatechie.springrev.service;

import com.javatechie.springrev.dto.SongRequest;
import com.javatechie.springrev.dto.SongResponse;
import com.javatechie.springrev.entity.Album;
import com.javatechie.springrev.entity.ArtistProfile;
import com.javatechie.springrev.entity.Song;
import com.javatechie.springrev.repository.AlbumRepository;
import com.javatechie.springrev.repository.ArtistProfileRepository;
import com.javatechie.springrev.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SongService {

    @Autowired
    private SongRepository songRepository;

    @Autowired
    private ArtistProfileRepository artistRepository;

    @Autowired
    private AlbumRepository albumRepository;

    // Create a song
    public SongResponse createSong(SongRequest request) {
        ArtistProfile artist = artistRepository.findById(request.getArtistId())
                .orElse(null);

        Album album = albumRepository.findById(request.getAlbumId())
                .orElse(null);

        Song song = new Song();
        song.setTitle(request.getTitle());
        song.setGenre(request.getGenre());
        song.setUrl(request.getUrl());
        song.setArtist(artist);
        song.setAlbum(album);

        songRepository.save(song);

        return mapToResponse(song);
    }

    // Get all songs
    public List<SongResponse> getAllSongs() {
        return songRepository.findAll().stream()
                .map(this::mapToResponse)
                .collect(Collectors.toList());
    }

    // Get song by ID
    public SongResponse getSongById(Long id) {
        Song song = songRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Song not found"));
        return mapToResponse(song);
    }

    // Update a song
    public SongResponse updateSong(Long id, SongRequest request) {
        Song song = songRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Song not found"));

        song.setTitle(request.getTitle());
        song.setGenre(request.getGenre());
        song.setUrl(request.getUrl());

        if (request.getArtistId() != null) {
            ArtistProfile artist = artistRepository.findById(request.getArtistId())
                    .orElse(null);
            song.setArtist(artist);
        }

        if (request.getAlbumId() != null) {
            Album album = albumRepository.findById(request.getAlbumId())
                    .orElse(null);
            song.setAlbum(album);
        }

        songRepository.save(song);
        return mapToResponse(song);
    }

    // Delete a song
    public void deleteSong(Long id) {
        Song song = songRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Song not found"));
        songRepository.delete(song);
    }

    // Utility method to map Song entity to SongResponse DTO
    private SongResponse mapToResponse(Song song) {
        String artistName = song.getArtist() != null ? song.getArtist().getName() : null;
        String albumTitle = song.getAlbum() != null ? song.getAlbum().getTitle() : null;

        return new SongResponse(
                song.getId(),
                song.getTitle(),
                song.getGenre(),
                song.getUrl(),
                artistName,
                albumTitle
        );
    }
}