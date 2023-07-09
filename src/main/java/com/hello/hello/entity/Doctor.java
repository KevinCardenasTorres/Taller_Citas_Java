package com.hello.hello.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Doctor {

    @Id    
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String nombre;

    private String apellido;

    private String email;

    private String consultorio;

     

    //Constructor
    public Doctor () {
 
    }

    //Constructor
    public Doctor(Long id, String nombre,String apellido, String email, String consultorio){        
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.consultorio=consultorio;
    }

    public Long getId() {
        return id;
    }

    //Métodos de acceso
    //getter
    public String getNombre() {
        return nombre;
    }
    public String getApellido() {
        return apellido;
    }

    public String getEmail() {
        return email;
    }

    public String getConsultorio() {
        return consultorio;
    }

    //setter
    public void setId(Long id) {
        this.id = id;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void consultorio(String consultorio) {
        this.consultorio = consultorio;
    }
    
}