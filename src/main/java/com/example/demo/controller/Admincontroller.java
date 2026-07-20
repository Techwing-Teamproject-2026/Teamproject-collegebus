package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.DashboardDTO;
import com.example.demo.models.Admin;
import com.example.demo.repository.AttendanceRepository;
import com.example.demo.repository.BusRepository;
import com.example.demo.repository.ComplaintRepository;
import com.example.demo.repository.DriverRepository;
import com.example.demo.repository.RouteRepository;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	private AdminService adminService;
	
	@Autowired
	private StudentRepository studentRepository;
	
	@Autowired
	private DriverRepository driverRepository;
	
	@Autowired
	private BusRepository busRepository;
	
	@Autowired
	private RouteRepository routeRepository;
	
	@Autowired
	private AttendanceRepository attendanceRepository;
	
	@Autowired
	private ComplaintRepository complaintRepository;
	
	

	// Save Admin 
	@PostMapping("/signup/save")
	public Admin saveAdmin(@RequestBody Admin admin) {
		return adminService.saveAdmin(admin);
	}

	@PostMapping("/login")
	public Admin login(@RequestBody Admin admin) {

		return adminService.login(admin.getUsername(), admin.getPassword());

	}

	// Get All Admins
	@GetMapping("/getall")
	public List<Admin> getAllAdmins() {
		return adminService.getAllAdmins();
	}

	// Get Admin By Id
	@GetMapping("/get/{id}")
	public Optional<Admin> getAdminById(@PathVariable Long id) {
		return adminService.getAdminById(id);
	}

	// Update Admin
	@PutMapping("/update/{id}")
	public Admin updateAdmin(@PathVariable Long id, @RequestBody Admin admin) {

		return adminService.updateAdmin(id, admin);
	}

	// Delete Admin
	@DeleteMapping("/delete/{id}")
	public String deleteAdmin(@PathVariable Long id) {

		adminService.deleteAdmin(id);
		return "Admin Deleted Successfully";
	}

	@GetMapping("/dashboard")
	public DashboardDTO getDashboard() {

	    DashboardDTO dashboard = new DashboardDTO();

	    dashboard.setTotalStudents(studentRepository.count());
	    dashboard.setTotalDrivers(driverRepository.count());
	    dashboard.setTotalBuses(busRepository.count());
	    dashboard.setTotalRoutes(routeRepository.count());
	    dashboard.setTotalAttendance(attendanceRepository.count());
	    dashboard.setTotalComplaints(complaintRepository.count());

	    return dashboard;
	}

}