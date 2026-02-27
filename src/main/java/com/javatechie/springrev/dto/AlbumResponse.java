package com.javatechie.springrev.dto;

public record AlbumResponse(
        Long id,
        String title,
        String description,
        String coverImageUrl,
        ArtistProfileRequest artist,
                String artistName
) {}