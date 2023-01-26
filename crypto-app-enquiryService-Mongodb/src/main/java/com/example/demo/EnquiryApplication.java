package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication (exclude = {DataSourceAutoConfiguration.class })
@EnableEurekaClient
public class EnquiryApplication {

	public static void main(String[] args) {
		SpringApplication.run(EnquiryApplication.class, args);
	}

}
