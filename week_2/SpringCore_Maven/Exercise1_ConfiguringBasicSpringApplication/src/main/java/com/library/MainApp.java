package com.library;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;
import com.library.repository.BookRepository;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService service =
                (BookService) context.getBean("bookService");

        BookRepository repository =
                (BookRepository) context.getBean("bookRepository");

        service.displayService();
        repository.displayRepository();

        System.out.println("Spring Configuration Loaded Successfully");
    }
}