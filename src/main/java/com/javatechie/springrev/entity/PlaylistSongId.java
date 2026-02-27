package com.javatechie.springrev.entity;

import jakarta.persistence.Embeddable;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class PlaylistSongId implements Serializable {

    private Long playlistId;
    private Long songId;
}