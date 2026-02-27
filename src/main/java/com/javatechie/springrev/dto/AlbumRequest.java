package com.javatechie.springrev.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AlbumRequest {
    private String title;
    private String description;
    private Long artistId;
    private String coverImageUrl;
}