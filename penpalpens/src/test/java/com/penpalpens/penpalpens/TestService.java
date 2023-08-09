package com.penpalpens.penpalpens;

import com.penpalpens.penpalpens.controller.ShareController;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.test.annotation.Commit;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TestService {
    @Autowired
    ShareController shareController;
    @Autowired
    UserRepository userRepository;

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
