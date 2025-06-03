package com.patamansa.backend.dto;

public class FormularioAdocaoDTO {
    private String email;
    private String telefone;
    private String motivo;
    private String ambiente;
    private boolean espacoExterno;
    private boolean animaisAntes;
    private boolean ambienteSeguro;

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }

    public String getMotivo() {
        return motivo;
    }

    public String getAmbiente() {
        return ambiente;
    }

    public boolean isEspacoExterno() {
        return espacoExterno;
    }

    public boolean isAnimaisAntes() {
        return animaisAntes;
    }

    public boolean isAmbienteSeguro() {
        return ambienteSeguro;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public void setAmbiente(String ambiente) {
        this.ambiente = ambiente;
    }

    public void setEspacoExterno(boolean espacoExterno) {
        this.espacoExterno = espacoExterno;
    }

    public void setAnimaisAntes(boolean animaisAntes) {
        this.animaisAntes = animaisAntes;
    }

    public void setAmbienteSeguro(boolean ambienteSeguro) {
        this.ambienteSeguro = ambienteSeguro;
    }
}
