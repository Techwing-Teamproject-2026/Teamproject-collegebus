package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class Adminmodels {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer admin_id;
	@NotBlank(message = "username is required")
	private String username;
	@Size(min = 4,max = 15)
	private String password;
	@Email
	private String email;
	private String role;
	private String full_name;
	private String created_at;
	public Integer getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(Integer admin_id) {
		this.admin_id = admin_id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getFull_name() {
		return full_name;
	}
	public void setFull_name(String full_name) {
		this.full_name = full_name;
	}
	public String getCreated_at() {
		return created_at;
	}
	public void setCreated_at(String created_at) {
		this.created_at = created_at;
	}
	public Adminmodels(Integer admin_id, @NotBlank(message = "username is required") String username,
			@Size(min = 4, max = 15) String password, @Email String email, String role, String full_name,
			String created_at) {
		super();
		this.admin_id = admin_id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.full_name = full_name;
		this.created_at = created_at;
	}
	public Adminmodels() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
	