package com.javatechie.springrev.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.javatechie.springrev.entity.Album;
import com.javatechie.springrev.entity.ArtistProfile;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "songs")
@Getter
@Setter
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String url;
    private String genre;
    private String name;
    @ManyToOne

    @JoinColumn(name = "artist_id")
    @JsonBackReference
    private ArtistProfile artist;

    @ManyToOne
    @JoinColumn(name = "album_id")

    private Album album;

    private int playCount;

}