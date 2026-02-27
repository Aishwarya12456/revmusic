package com.javatechie.springrev.dto;

public class SongRequest {

    private String title;
    private String genre;
    private String url;
    private Long artistId; // send artist ID from Postman
    private Long albumId;  // send album ID from Postman (can be null)

    public SongRequest() {
    }

    public SongRequest(String title, String genre, String url, Long artistId, Long albumId) {
        this.title = title;
        this.genre = genre;
        this.url = url;
        this.artistId = artistId;
        this.albumId = albumId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Long getArtistId() {
        return artistId;
    }

    public void setArtistId(Long artistId) {
        this.artistId = artistId;
    }

    public Long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Long albumId) {
        this.albumId = albumId;
    }
}