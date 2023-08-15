package com.penpalpens.penpalpens.controller;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.service.DiaryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@RestController
@Log4j2
@CrossOrigin(origins = "*")
public class DiaryController {
    @Autowired
    DiaryService diaryService;

    public UserInfo userSession(HttpServletRequest request){
        HttpSession session = request.getSession(false);
        UserInfo userInfo = (UserInfo) session.getAttribute("userInfo");
        return userInfo;
    }

    // 글 쓰기
    @PostMapping("/diary")
    public void createDiary(@RequestBody Map<String, Object> diary, HttpServletRequest request) throws ParseException {
        UserInfo userInfo = userSession(request);
        System.out.println("user Info " + userInfo);
        diaryService.createDiary(diary, userInfo);
    }

    // 글 리스트
    @GetMapping("/diary")
    public List<Diary> ListDiary(HttpServletRequest request) throws ParseException {
        System.out.println("전체 글 리스트 불러오기 호출");
        UserInfo userInfo = userSession(request);
        List<Diary> list = new ArrayList<>();
        return list = diaryService.ListDiary(userInfo);
    }

    // 글 읽기
    @GetMapping("/diary/read")
    public Diary ReadDiary(@RequestParam String dIdx, HttpServletRequest request) throws Exception {
        int num = Integer.parseInt(dIdx);
        UserInfo userInfo = userSession(request);
        Diary diary = diaryService.ReadDiary(num, userInfo);
        return diary;
    }


    // 글 수정 불러오기
    @GetMapping("/diary/update")
    public Diary UpdateDiary(@RequestParam String dIdx, HttpServletRequest request) throws Exception {
        int num = Integer.parseInt(dIdx);
        UserInfo userInfo = userSession(request);
        Diary diary = diaryService.UpdateDiary(num, userInfo);
        return diary;
    }

    @PutMapping("/diary")
    public void ModifyDiary(@RequestBody Map<String, Object> diary) throws ParseException {
        diaryService.ModifyDiary(diary);
    }

    @DeleteMapping("/diary")
    public void DeleteDiary(@RequestParam String dIdx, HttpServletRequest request) throws Exception {
        int num = Integer.parseInt(dIdx);
        diaryService.DeleteDiary(num);
    }
}