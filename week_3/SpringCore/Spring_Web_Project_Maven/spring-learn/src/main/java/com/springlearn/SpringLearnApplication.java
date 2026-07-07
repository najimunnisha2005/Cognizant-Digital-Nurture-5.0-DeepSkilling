package com.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {

    public static void main(String[] args) {

        System.out.println("Main method started...");

        SpringApplication.run(SpringLearnApplication.class, args);

        System.out.println("Application started successfully!");

    }

}