package com.javatechie.springrev.service;

import com.javatechie.springrev.dto.AuthRequest;
import com.javatechie.springrev.dto.RegisterRequest;
import com.javatechie.springrev.entity.Role;
import com.javatechie.springrev.entity.User;
import com.javatechie.springrev.repository.RoleRepository;
import com.javatechie.springrev.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // Register new user
    public User register(RegisterRequest request) {

        // Create ROLE_USER if not exists
        Role role = roleRepository.findByName("ROLE_USER")
                .orElseGet(() -> {
                    Role r = new Role();
                    r.setName("ROLE_USER");
                    return roleRepository.save(r);
                });

        User user = new User();
        user.setUsername(request.getEmail()); // username = email
        user.setEmail(request.getEmail());
        user.setName(request.getName());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(role);

        return userRepository.save(user);
    }

    // Fetch user by email
    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }
}