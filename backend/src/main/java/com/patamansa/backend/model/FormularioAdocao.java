package com.patamansa.backend.model;

import jakarta.persistence.*;

@Entity
public class FormularioAdocao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String telefone;
    private String motivo;
    private String ambiente;
    private boolean espacoExterno;
    private boolean teveAnimaisAntes;
    private boolean ambienteSeguro;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public String getAmbiente() {
        return ambiente;
    }

    public void setAmbiente(String ambiente) {
        this.ambiente = ambiente;
    }

    public boolean isEspacoExterno() {
        return espacoExterno;
    }

    public void setEspacoExterno(boolean espacoExterno) {
        this.espacoExterno = espacoExterno;
    }

    public boolean isTeveAnimaisAntes() {
        return teveAnimaisAntes;
    }

    public void setTeveAnimaisAntes(boolean teveAnimaisAntes) {
        this.teveAnimaisAntes = teveAnimaisAntes;
    }

    public boolean isAmbienteSeguro() {
        return ambienteSeguro;
    }

    public void setAmbienteSeguro(boolean ambienteSeguro) {
        this.ambienteSeguro = ambienteSeguro;
    }
}
