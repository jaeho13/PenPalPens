package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.entity.Shared;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.ShareService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@CrossOrigin(origins = "*")
public class ShareController {


    public UserInfo userSession(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");
        return userInfo;
    }

    @Autowired
    ShareService shareService;

    @GetMapping("/share/makeCode")
    public Map<String, Object> makeCode(HttpServletRequest request) throws Exception {
        System.out.println("코드 호출");
        UserInfo userInfo = userSession(request);
        Map<String, Object> map = shareService.makeCode(userInfo);

        return map;
    }

    // 이미 연결된 일기장인지 들어가기가 가능한지 확인
    @GetMapping("/share/shareCode")
    public int shareCode(HttpServletRequest request) throws Exception {
        System.out.println("shareCode 호출");
        UserInfo userInfo = userSession(request);
        int bool = shareService.shareCode(userInfo);
        return bool;
    }

    @GetMapping("/share/sendCode") //교환일기 연결하기
    public int sendCode(@RequestParam String code, HttpServletRequest request) throws Exception {
        int num = Integer.parseInt(String.valueOf(code));
        UserInfo userInfo = userSession(request);
        int link = shareService.sendCode(num, userInfo);
        return link;
    }

    @GetMapping("share")
    public Map<String, Object> shareList(HttpServletRequest request) throws Exception {
        UserInfo userInfo = userSession(request);
        Map<String, Object> map = new HashMap<>();

        map = shareService.shareList(userInfo);
        return map;
    }
}
