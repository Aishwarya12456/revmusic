package com.javatechie.springrev.dto;

import java.time.LocalDateTime;

public class ListeningHistoryResponse {

    private Long id;
    private LocalDateTime listenedAt;
    private SongInfo song;
    private UserInfo user;

    // Inner class for Song
    public static class SongInfo {
        private Long id;
        private String title;
        private String genre;
        private String url;

        // Getters and Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getTitle() { return title; }
        public void setTitle(String title) { this.title = title; }

        public String getGenre() { return genre; }
        public void setGenre(String genre) { this.genre = genre; }

        public String getUrl() { return url; }
        public void setUrl(String url) { this.url = url; }
    }

    // Inner class for User
    public static class UserInfo {
        private Long id;
        private String email;

        // Getters and Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }

    // Getters and Setters for ListeningHistoryResponse
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public LocalDateTime getListenedAt() { return listenedAt; }
    public void setListenedAt(LocalDateTime listenedAt) { this.listenedAt = listenedAt; }

    public SongInfo getSong() { return song; }
    public void setSong(SongInfo song) { this.song = song; }

    public UserInfo getUser() { return user; }
    public void setUser(UserInfo user) { this.user = user; }
}