package com.patamansa.backend.controller;

import com.patamansa.backend.dto.LoginRequest;
import com.patamansa.backend.dto.LoginResponse;
import com.patamansa.backend.dto.RegisterRequest;
import com.patamansa.backend.security.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public LoginResponse register(@RequestBody RegisterRequest request) {
        return authenticationService.register(request);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        LoginResponse token = authenticationService.login(request);
        return ResponseEntity.ok(token.getToken());
    }
}
