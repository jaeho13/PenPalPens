package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.DiaryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.HashMap;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@CrossOrigin(origins = "*")
public class DiaryController {
    @Autowired
    DiaryService diaryService;

    // 글 쓰기
    @PostMapping("/diary")
    public void createDiary(@RequestBody Map<String, Object> diary, HttpServletRequest request) throws ParseException {
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");
        System.out.println("김유리" + userInfo);
        diaryService.createDiary(diary, userInfo);
    }

    @GetMapping("/diary")
    public Map<String, Object> ListDiary(HttpServletRequest request) throws ParseException {
        Map<String, Object> map = new HashMap<>();
        map.put("uEmail", "pizzay@kakao.com");
        map.put("dTitle", "안녕");
        map.put("dDate", "2023-01-01");
        map.put("dContent", "hello");
        return map;
    }
}
