package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.DiaryRepository;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class DiaryService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DiaryRepository diaryRepository;


    public void createDiary(Map<String, Object> diary, UserInfo userInfo) {
        Diary d = new Diary();
        System.out.println("user은??" + userInfo.getUEmail());
        String uEmail = (String) userInfo.getUEmail();
        UserInfo userVO = userRepository.findByuEmail(uEmail);
        System.out.println("========데려옴"+userVO);

        d.setDTitle((String) diary.get("dTitle"));
        d.setDContent((String) diary.get("dContent"));
        d.setUserInfoVO(userVO);
        d.setDDate(LocalDateTime.now());
        System.out.println("글 게시완료");
        diaryRepository.save(d);

    }


    public List<Diary> ListDiary(UserInfo userInfo) {
        String uEmail = userInfo.getUEmail();
        System.out.println("회원 조회 후 그 회원이 쓴 글 가져오기 : "+ uEmail);
        List<Diary> list = diaryRepository.findMyDiary(uEmail);
        System.out.println("전체 글 리스트"+list);

        return list;
    }
}
