package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.Adminmodels;
@Repository
public interface Adminrepository extends JpaRepository<Adminmodels, Integer> {

}
