package com.codeabac.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class ResturantAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResturantAppApplication.class, args);
	}


}
