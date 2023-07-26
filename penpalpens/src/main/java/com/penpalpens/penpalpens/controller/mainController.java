package com.penpalpens.penpalpens.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {
    @GetMapping("/hello")
    public String test(){
        return "Hello, World!";
    }
}
