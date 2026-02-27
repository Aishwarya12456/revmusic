package com.javatechie.springrev.dto;

public class SongResponse {
    private Long id;
    private String title;
    private String genre;
    private String url;
    private String artistName;
    private String albumTitle;

    public SongResponse(Long id, String title, String genre, String url, String artistName, String albumTitle) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.url = url;
        this.artistName = artistName;
        this.albumTitle = albumTitle;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getGenre() { return genre; }
    public void setGenre(String genre) { this.genre = genre; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }

    public String getArtistName() { return artistName; }
    public void setArtistName(String artistName) { this.artistName = artistName; }

    public String getAlbumTitle() { return albumTitle; }
    public void setAlbumTitle(String albumTitle) { this.albumTitle = albumTitle; }
}