package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Adminmodels;
import com.example.demo.repository.Adminrepository;
@Service
public class Adminservice {
	@Autowired
	Adminrepository repo;
	public String adddata(Adminmodels a) {
		repo.save(a);
		return "successfully added";
		
	}
	public List<Adminmodels> getall() {
		return repo.findAll();
	}
	
	

}
