package com.javatechie.springrev.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ArtistProfileRequest {
    private String name;
    private String bio;
    private String imageUrl;
}