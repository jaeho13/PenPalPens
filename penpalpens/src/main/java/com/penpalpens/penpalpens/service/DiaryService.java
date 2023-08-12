package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.Diary;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.DiaryRepository;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class DiaryService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    DiaryRepository diaryRepository;

    public void createDiary(Map<String, Object> diary, UserInfo userInfo) {
        Diary d = new Diary();
        UserInfo userVO = userRepository.findByuEmail((String) userInfo.getUEmail());

        d.setDTitle((String) diary.get("dTitle"));
        d.setDContent((String) diary.get("dContent"));
        d.setUserInfoVO(userVO);
        System.out.println("글 게시완료");
        diaryRepository.save(d);

//            JBoard j = new JBoard();
//            j.setBTitle((String) board.get("boardTitle"));
//            j.setBContent((String) board.get("boardContent"));
//            Member memberVO = memberService.findUser((String) board.get("memberAccount"));
//            j.setMemberVO(memberVO);
//            boardRepository.save(j);
    }
}
