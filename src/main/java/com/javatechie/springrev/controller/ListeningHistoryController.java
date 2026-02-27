package com.javatechie.springrev.controller;


import com.javatechie.springrev.dto.ListeningHistoryResponse;
import com.javatechie.springrev.entity.ListeningHistory;
import com.javatechie.springrev.service.ListeningHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/history")
public class ListeningHistoryController {

    @Autowired
    private ListeningHistoryService historyService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<ListeningHistoryResponse>> getListeningHistory(@PathVariable Long userId) {
        return ResponseEntity.ok(historyService.getHistoryByUser(userId));
    }

    @PostMapping("/{userId}/song/{songId}")
    public ResponseEntity<ListeningHistory> addListeningHistory(@PathVariable Long userId, @PathVariable Long songId) {
        ListeningHistory history = historyService.addHistory(userId, songId);
        return ResponseEntity.ok(history);
    }
}