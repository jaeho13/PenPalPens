package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
@Log4j2
public class LoginService {

    @Autowired
    private final UserRepository userRepository;

    public void joinUser(Map<String, Object> userVO) {
        System.out.println("=====((회원가입 호출))=====");
        System.out.println(userVO);
        UserInfo user = new UserInfo();
        user.setUEmail((String) userVO.get("uEmail"));
        user.setUId((String) userVO.get("uId"));
        user.setUPw((String) userVO.get("uPw"));
        user.setUNick((String) userVO.get("uNick"));
        user.setULink(false);

        userRepository.save(user);
    }
}
