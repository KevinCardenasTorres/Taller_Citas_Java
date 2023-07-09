package com.hello.hello.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Cita {

    @Id    
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String cedula;

    private String especialidad;

    private LocalDate dateOfBirth;

     

    //Constructor
    public Cita(){

    }

    //Constructor
    public Cita(Long id, String cedula,String especialidad,LocalDate dateOfBirth){        
        this.id=id;
        this.cedula=cedula;
        this.especialidad=especialidad;
        this.dateOfBirth=dateOfBirth;
    }

    public Long getId() {
        return id;
    }

    //Métodos de acceso
    //getter
    public String getCedula() {
        return cedula;
    }
    public String getEspecialidad() {
        return especialidad;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    //setter
    public void setId(Long id) {
        this.id = id;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }
    public void setEspecialidad(String especialidad) {
        this.especialidad = especialidad;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    
}
