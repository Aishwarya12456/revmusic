package com.javatechie.springrev.service;


import com.javatechie.springrev.entity.ArtistProfile;
import com.javatechie.springrev.repository.ArtistProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArtistService {

    @Autowired
    private ArtistProfileRepository artistRepository;

    public ArtistProfile createArtist(ArtistProfile artistProfile) {
        return artistRepository.save(artistProfile);
    }

    public List<ArtistProfile> getAllArtists() {
        return artistRepository.findAll();
    }

    public ArtistProfile getArtistById(Long id) {
        return artistRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Artist not found"));
    }

    public ArtistProfile updateArtist(Long id, ArtistProfile artistDetails) {
        ArtistProfile artist = getArtistById(id);
        artist.setName(artistDetails.getName());
        artist.setBio(artistDetails.getBio());
        artist.setImageUrl(artistDetails.getImageUrl());
        return artistRepository.save(artist);
    }

    public void deleteArtist(Long id) {
        artistRepository.delete(getArtistById(id));
    }
}