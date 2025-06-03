package com.patamansa.backend.controller;

import com.patamansa.backend.dto.FormularioAdocaoDTO;
import com.patamansa.backend.model.FormularioAdocao;
import com.patamansa.backend.service.FormularioAdocaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/formulario")
public class FormularioAdocaoController {
    @Autowired
    private FormularioAdocaoService service;

    @PostMapping
    public ResponseEntity<Void> enviarFormulario(@RequestBody FormularioAdocaoDTO dto) {
        service.processarFormulario(dto);
        return ResponseEntity.ok().build();
    }

}
