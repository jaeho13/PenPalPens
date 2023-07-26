package com.penpalpens.penpalpens;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class PenpalpensApplication {

	public static void main(String[] args) {
		SpringApplication.run(PenpalpensApplication.class, args);
	}

}
