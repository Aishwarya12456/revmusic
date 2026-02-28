package com.javatechie.springrev.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;

@Entity
@Table(name = "listening_history")
@Getter
@Setter
public class ListeningHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime listenedAt;

    @ManyToOne
    @JsonBackReference   // ✅ ADD THIS
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    private Song song;
}