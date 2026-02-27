package com.javatechie.springrev.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FavoriteResponse {
    private Long songId;
    private String songTitle;
    private String artistName;
}