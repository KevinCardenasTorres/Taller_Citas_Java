package com.hello.hello.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.hello.hello.entity.Doctor;


@RepositoryRestResource(collectionResourceRel = "Doctors", path="Doctors")

/*
 *  /Doctor  GET
 *  /Doctors POST
 *  /Doctor/{id} GET
 *  /Doctors/{id} PUT
 *  /Doctors/{id} DELETE
 */

public interface DoctorRepository extends PagingAndSortingRepository<Doctor, Long>, CrudRepository<Doctor, Long>
{
    //Mappings personalizados
}
