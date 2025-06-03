package com.patamansa.backend.service;

import com.patamansa.backend.dto.AdocaoDTO;
import com.patamansa.backend.model.Adocao;
import com.patamansa.backend.model.Pet;
import com.patamansa.backend.model.StatusPet;
import com.patamansa.backend.model.User;
import com.patamansa.backend.repository.AdocaoRepository;
import com.patamansa.backend.repository.PetRepository;
import com.patamansa.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdocaoService {

    @Autowired
    private AdocaoRepository adocaoRepository;

    @Autowired
    private PetRepository petRepository;

    @Autowired
    private UserRepository userRepository;

    public void registrarAdocao(AdocaoDTO dto) {
        User cliente = userRepository.findById(dto.getIdCliente())
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));

        Pet pet = petRepository.findById(dto.getIdPet())
                .orElseThrow(() -> new RuntimeException("Pet não encontrado"));

        Adocao adocao = new Adocao();
        adocao.setCliente(cliente);
        adocao.setPet(pet);

        pet.setStatus(StatusPet.Disponivel);

        adocaoRepository.save(adocao);
        petRepository.save(pet);
    }
}
