package com.patamansa.backend.repository;

import com.patamansa.backend.model.Pet;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet, Long> {
}


