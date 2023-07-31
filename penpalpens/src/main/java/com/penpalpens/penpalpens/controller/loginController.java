package com.penpalpens.penpalpens.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class loginController {
    //회원가입
    @PostMapping("join")
    public void joinUser(@RequestBody Map<String, Object> userVO)throws ParseException {

    }
}
