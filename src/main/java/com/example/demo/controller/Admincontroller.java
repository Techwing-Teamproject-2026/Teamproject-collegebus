package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Adminmodels;
import com.example.demo.service.Adminservice;
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/v1")
@RestController
public class Admincontroller {
	@Autowired
	Adminservice ser;
	@PostMapping("/adminadd")
	public String adddata(@RequestBody Adminmodels a) {
		return ser.adddata(a);
	}
	@GetMapping("/admingetall")
	public List<Adminmodels> getall() {
		return ser.getall();
	}
	
	
	
	

}
