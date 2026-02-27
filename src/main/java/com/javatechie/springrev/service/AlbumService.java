package com.javatechie.springrev.service;

import com.javatechie.springrev.entity.Album;
import com.javatechie.springrev.entity.ArtistProfile;
import com.javatechie.springrev.repository.AlbumRepository;
import com.javatechie.springrev.repository.ArtistProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumService {

    @Autowired
    private AlbumRepository albumRepository;

    @Autowired
    private ArtistProfileRepository artistRepository;

    public Album createAlbum(Album album) {
        ArtistProfile artist = artistRepository.findById(album.getArtist().getId())
                .orElseThrow(() -> new RuntimeException("Artist not found"));
        album.setArtist(artist);
        return albumRepository.save(album);
    }

    public List<Album> getAllAlbums() {
        return albumRepository.findAll();
    }

    public Album getAlbumById(Long id) {
        return albumRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Album not found"));
    }

    public Album updateAlbum(Long id, Album albumDetails) {
        Album album = getAlbumById(id);
        album.setTitle(albumDetails.getTitle());
        album.setDescription(albumDetails.getDescription());
        album.setCoverImageUrl(albumDetails.getCoverImageUrl());
        return albumRepository.save(album);
    }

    public void deleteAlbum(Long id) {
        Album album = getAlbumById(id);
        albumRepository.delete(album);
    }

}