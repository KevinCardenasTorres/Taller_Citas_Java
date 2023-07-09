package com.hello.hello.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hello.hello.entity.Paciente;


@RepositoryRestResource(collectionResourceRel = "Pacientes", path="Pacientes")

/*
 *  /Paciente  GET
 *  /Pacientes POST
 *  /Paciente/{id} GET
 *  /Pacientes/{id} PUT
 *  /Pacientes/{id} DELETE
 */

public interface PacienteRepository extends PagingAndSortingRepository<Paciente, Long>, CrudRepository<Paciente, Long>
{
    //Mappings personalizados
}
