package com.javatechie.springrev.repository;


import com.javatechie.springrev.entity.PlaylistSong;
import com.javatechie.springrev.entity.PlaylistSongId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistSongRepository extends JpaRepository<PlaylistSong, PlaylistSongId> {
}