package com.example.demo.model;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


@Entity
public class CryptoUsers {
	
	@Id
	@Column(name = "emailid")
	String id;
//	@Column(name = "Fullname")
	String name;
//	@Column(name = "Email_Id")
	String pancardNo;
//	@Column(name = "Mobile_No")
	Long accno;
//	@Column(name = "Password_E")
	Long mobno;
	String password;



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getPancardNo() {
		return pancardNo;
	}



	public void setPancardNo(String pancardNo) {
		this.pancardNo = pancardNo;
	}



	public Long getAccno() {
		return accno;
	}



	public void setAccno(Long accno) {
		this.accno = accno;
	}



	public Long getMobno() {
		return mobno;
	}



	public void setMobno(Long mobno) {
		this.mobno = mobno;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		
		BCryptPasswordEncoder pwdEncoder = new BCryptPasswordEncoder();
		String encryptedPwd = pwdEncoder.encode(password);
		this.password = encryptedPwd;
		
//		this.password=password;
		
	}
	
	public void setNewPassword(String password) {
		this.password = password;
	}



	public CryptoUsers(String id, String name, String pancardNo, Long accno, Long mobno, String password) {
		super();
		this.id = id;
		this.name = name;
		this.pancardNo = pancardNo;
		this.accno = accno;
		this.mobno = mobno;
		this.password = password;
	}



	public CryptoUsers() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "CryptoUsers [id=" + id + ", name=" + name + ", pancardNo=" + pancardNo + ", accno=" + accno + ", mobno="
				+ mobno + ", password=" + password + "]";
	}



	@Override
	public int hashCode() {
		return Objects.hash(accno, id, mobno, name, pancardNo, password);
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		CryptoUsers other = (CryptoUsers) obj;
		return Objects.equals(accno, other.accno) && Objects.equals(id, other.id) && Objects.equals(mobno, other.mobno)
				&& Objects.equals(name, other.name) && Objects.equals(pancardNo, other.pancardNo)
				&& Objects.equals(password, other.password);
	}

	
}