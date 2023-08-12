package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.DiaryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.;

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
@CrossOrigin(origins = "")
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

    // 글 리스트
    @GetMapping("/diary")
    public List<Diary> ListDiary(HttpServletRequest request) throws ParseException {
        System.out.println("전체 글 리스트 불러오기 호출");
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");
        List<Diary> list = new ArrayList<>();
        return list = diaryService.ListDiary(userInfo);
    }
}