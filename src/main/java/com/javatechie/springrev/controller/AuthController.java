package com.javatechie.springrev.controller;

import com.javatechie.springrev.dto.AuthRequest;
import com.javatechie.springrev.dto.AuthResponse;
import com.javatechie.springrev.dto.RegisterRequest;
import com.javatechie.springrev.entity.User;
import com.javatechie.springrev.service.AuthService;
import com.javatechie.springrev.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")

public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    // User registration
    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        User user = authService.register(request);
        String token = jwtService.generateToken(user.getEmail());
        return ResponseEntity.ok(new AuthResponse(token, "Registration successful"));
    }

    // User login
    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody AuthRequest request) {
        try {
            // Authenticate using Spring Security
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            // Fetch user and generate JWT
            User user = authService.getUserByEmail(request.getEmail());
            String token = jwtService.generateToken(user.getEmail());

            return ResponseEntity.ok(new AuthResponse(token, "Login successful"));
        } catch (Exception e) {
            return ResponseEntity.status(401).body(new AuthResponse(null, "Invalid credentials"));
        }
    }
}