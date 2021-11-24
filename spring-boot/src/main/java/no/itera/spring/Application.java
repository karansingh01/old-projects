package no.itera.spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

@SpringBootApplication
public class Application implements CommandLineRunner {
	private final ApplicationContext context;

	public Application(ApplicationContext context) {
		this.context = context;
	}
	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);

/* 		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
		Calculation calculation = context.getBean(Calculation.class);
		calculation.complexCalculation(); */
	    }
	@Override
	public void run(String... args) throws Exception {
		context.getBean(Calculation.class).complexCalculation();
		// TODO Auto-generated method stub
	/* 	Calculation calculation = context.getBean(Calculation.class);
    
		calculation.complexCalculation(); */
	}
	}


