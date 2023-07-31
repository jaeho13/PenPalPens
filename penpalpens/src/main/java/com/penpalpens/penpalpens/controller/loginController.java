package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.service.LoginService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@Log4j2
public class loginController {
    @Autowired
    private final LoginService loginService;

    // 회원가입
    @PostMapping("/join")
    public void joinUser(@RequestParam Map<String, Object> userVO) throws ParseException {
        loginService.joinUser(userVO);
    }
}
