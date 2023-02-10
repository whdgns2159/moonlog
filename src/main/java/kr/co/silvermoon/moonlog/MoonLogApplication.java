package kr.co.silvermoon.moonlog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = {"kr.co.silvermoon.moonlog"})
public class MoonLogApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoonLogApplication.class, args);
	}

}
