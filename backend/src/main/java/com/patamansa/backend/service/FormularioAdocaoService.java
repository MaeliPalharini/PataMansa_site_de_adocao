package com.patamansa.backend.service;

import com.patamansa.backend.dto.FormularioAdocaoDTO;
import com.patamansa.backend.model.FormularioAdocao;
import com.patamansa.backend.repository.FormularioAdocaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FormularioAdocaoService {

    @Autowired
    private FormularioAdocaoRepository repository;

    public void processarFormulario(FormularioAdocaoDTO dto) {
        FormularioAdocao entidade = new FormularioAdocao();

        entidade.setEmail(dto.getEmail());
        entidade.setTelefone(dto.getTelefone());
        entidade.setMotivo(dto.getMotivo());
        entidade.setAmbiente(dto.getAmbiente());
        entidade.setEspacoExterno(dto.isEspacoExterno());
        entidade.setTeveAnimaisAntes(dto.isAnimaisAntes());
        entidade.setAmbienteSeguro(dto.isAmbienteSeguro());

        repository.save(entidade);
    }
}
