package com.javatechie.springrev.repository;

import com.javatechie.springrev.entity.ListeningHistory;
import com.javatechie.springrev.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ListeningHistoryRepository extends JpaRepository<ListeningHistory, Long> {
    List<ListeningHistory> findByUserOrderByListenedAtDesc(User user);
}