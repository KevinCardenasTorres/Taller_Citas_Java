package com.hello.hello.entity;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Paciente {

    @Id    
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private String apellido;

    private String nombre;

    private String cedula;

    private String edad;

    private String telefono;

    private String email;

    

     

    //Constructor
    public Paciente(){

    }

    //Constructor
    public Paciente(Long id, String nombre,String apellido,String cedula,String edad,String telefono, String email){        
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.cedula=cedula;
        this.edad=edad;
        this.telefono=telefono;
        this.email=email;
        
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

    public String getCedula() {
        return cedula;
    }
    public String getEdad() {
        return edad;
    }
    public String getTelefono() {
        return telefono;
    }
    public String getEmail() {
        return email;
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
    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public void setEdad(String edad) {
        this.edad = edad;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    
}

