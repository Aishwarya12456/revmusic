package com.javatechie.springrev.repository;


import com.javatechie.springrev.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository

public interface UserRepository extends JpaRepository<User, Long> {


    Optional<User> findByEmail(String email);

    Optional<User> findByname(String username);

    boolean existsByEmail(String email);
    boolean existsByUsername(String username);



}