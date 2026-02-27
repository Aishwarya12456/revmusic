package com.javatechie.springrev.service;


import com.javatechie.springrev.dto.ListeningHistoryResponse;
import com.javatechie.springrev.entity.ListeningHistory;
import com.javatechie.springrev.entity.Song;
import com.javatechie.springrev.entity.User;
import com.javatechie.springrev.repository.ListeningHistoryRepository;
import com.javatechie.springrev.repository.SongRepository;
import com.javatechie.springrev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ListeningHistoryService {

    @Autowired
    private ListeningHistoryRepository historyRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private SongRepository songRepository;

    public ListeningHistory addHistory(Long userId, Long songId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        Song song = songRepository.findById(songId).orElseThrow(() -> new RuntimeException("Song not found"));

        ListeningHistory history = new ListeningHistory();
        history.setUser(user);
        history.setSong(song);
        history.setListenedAt(LocalDateTime.now());

        return historyRepository.save(history);
    }

    public List<ListeningHistoryResponse> getHistoryByUser(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        return historyRepository.findByUserOrderByListenedAtDesc(user)
                .stream()
                .map(history -> {
                    ListeningHistoryResponse response = new ListeningHistoryResponse();
                    response.setId(history.getId());
                    response.setListenedAt(history.getListenedAt());

                    ListeningHistoryResponse.SongInfo songInfo = new ListeningHistoryResponse.SongInfo();
                    songInfo.setId(history.getSong().getId());
                    songInfo.setTitle(history.getSong().getTitle());
                    songInfo.setGenre(history.getSong().getGenre());
                    songInfo.setUrl(history.getSong().getUrl());
                    response.setSong(songInfo);

                    ListeningHistoryResponse.UserInfo userInfo = new ListeningHistoryResponse.UserInfo();
                    userInfo.setId(user.getId());
                    userInfo.setEmail(user.getEmail());
                    response.setUser(userInfo);

                    return response;
                })
                .collect(Collectors.toList());
    }
}