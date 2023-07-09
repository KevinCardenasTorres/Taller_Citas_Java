package com.hello.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hello.hello.entity.Cita;
import com.hello.hello.entity.Doctor;
import com.hello.hello.entity.Paciente;
import com.hello.hello.repository.CitaRepository;
import com.hello.hello.repository.DoctorRepository;
import com.hello.hello.repository.PacienteRepository;

@RestController
public class AppController {

    @Autowired
    private PacienteRepository pacienteRepository;
    
    @Autowired
    private DoctorRepository doctorRepository;
    
    @Autowired
    private CitaRepository citaRepository;

    @PostMapping("/pacientes")
    public ResponseEntity<Paciente> crearPaciente(@RequestBody Paciente paciente) {
        Paciente nuevoPaciente = pacienteRepository.save(paciente);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoPaciente);
    }
    
    @PostMapping("/doctores")
    public ResponseEntity<Doctor> crearDoctor(@RequestBody Doctor doctor) {
        Doctor nuevoDoctor = doctorRepository.save(doctor);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevoDoctor);
    }
    
    @PostMapping("/citas")
    public ResponseEntity<Cita> crearCita(@RequestBody Cita cita) {
        Cita nuevaCita = citaRepository.save(cita);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevaCita);
    }
    
    // Otros métodos y funcionalidades del API REST

}
