package com.penpalpens.penpalpens;

import com.penpalpens.penpalpens.controller.ShareController;
import com.penpalpens.penpalpens.entity.UserInfo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestService {
    @Autowired
    ShareController shareController;
    @Autowired
    UserRepository2 userRepository;

    @Test
    void 테스트(){
        UserInfo userInfo = new UserInfo(); //유저객체 생성
        System.out.println("====");
        userInfo.setUEmail("pizzay@kakao.com");
        userInfo.setUNick("유리");
        userInfo.setULink(false);

        System.out.println(userInfo.getULink());

    }
}
