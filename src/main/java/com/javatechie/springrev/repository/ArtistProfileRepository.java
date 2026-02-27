package com.javatechie.springrev.repository;


import com.javatechie.springrev.entity.ArtistProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArtistProfileRepository extends JpaRepository<ArtistProfile, Long> {
}