package com.patamansa.backend.controller;

import com.patamansa.backend.dto.AdocaoDTO;
import com.patamansa.backend.service.AdocaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/adocoes")
public class AdocaoController {

    @Autowired
    private AdocaoService adocaoService;

    @PostMapping
    public ResponseEntity<String> registrarAdocao(@RequestBody AdocaoDTO dto) {
        adocaoService.registrarAdocao(dto);
        return ResponseEntity.ok("Adoção registrada com sucesso!");
    }
}
