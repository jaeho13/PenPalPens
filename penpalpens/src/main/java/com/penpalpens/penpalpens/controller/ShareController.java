package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.entity.Shared;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.ShareService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.ArrayList;
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

    @GetMapping("/share/sendCode") // 교환일기 연결하기
    public int sendCode(@RequestParam String code, HttpServletRequest request) throws Exception {
        int num = Integer.parseInt(String.valueOf(code));
        UserInfo userInfo = userSession(request);
        int link = shareService.sendCode(num, userInfo);
        return link;
    }

    @GetMapping("/share")
    public Map<String, Object> shareList(HttpServletRequest request) throws Exception {
        UserInfo userInfo = userSession(request);
        List<Shared> list = new ArrayList<>();

        Map<String, Object> map = shareService.shareList(userInfo);
        return map;
    }

    @PostMapping("/share")
    public void shareWrite(@RequestBody Map<String, Object> share, HttpServletRequest request) throws ParseException {
        UserInfo userInfo = userSession(request);
        System.out.println("일기 호출" + share);
        Map<String, Object> map = new HashMap<>();
        shareService.shareWrite(share, userInfo);
    }

    // 삭제
    @DeleteMapping("/share")
    public void shareDelete(@RequestParam String sIdx) throws ParseException {
        int num = Integer.parseInt(sIdx);
        shareService.shareDelete(num);
    }

    // 읽기와 수정 - 불러오기
    @GetMapping("/shareMy")
    public Shared shareMyDiary(@RequestParam String sIdx) throws ParseException {
        System.out.println("이재호 글 왓을까");
        int num = Integer.parseInt(sIdx);
        Shared myDiary = shareService.shareMyDiary(num);

        return myDiary;
    }

    // 수정 - 처리성공
    @PutMapping("/share")
    public void ModifyMyDiary(@RequestBody Map<String, Object> share) throws ParseException {
        shareService.ModifyShareDiary(share);
    }
}