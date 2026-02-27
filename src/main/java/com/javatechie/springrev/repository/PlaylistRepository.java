package com.javatechie.springrev.repository;


import com.javatechie.springrev.entity.Playlist;
import com.javatechie.springrev.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlaylistRepository extends JpaRepository<Playlist, Long> {
    List<Playlist> findByUser(User user);
}