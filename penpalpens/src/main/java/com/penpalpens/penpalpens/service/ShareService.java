package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@Service
public class ShareService {

    @Autowired
    UserRepository userRepository;

    public Map<String, Object> makeCode(UserInfo userInfo) {
        Random random = new Random();
        Map<String, Object> map = new HashMap<>();

        if (userInfo.getULink() != 0) {
            System.out.println("이미 다른 일기장과 연결된 회원");

            map.put("boolean", 1);
            map.put("code", userInfo.getURandom());

            return map;

        } else if (userInfo.getURandom() == 0) { // 연결된 일기장이 없다면
            System.out.println("랜덤코드 생성 호출");
            int num;
            boolean isUnique = false;

            do {
                num = random.nextInt(90000000) + 10000000;
                System.out.println("num = " + num);
                isUnique = !userRepository.findByuRandom(num); // 중복되지 않으면 isUnique를 true로 설정
            } while (!isUnique);

            userInfo.setURandom(num);
        }
        //유저 정보에
        userRepository.save(userInfo); // 저장 위치 변경

        map.put("boolean", userInfo.getULink());
        map.put("code", userInfo.getURandom());

        System.out.println(userInfo);

        return map;
    }

    public int shareCode(UserInfo userInfo) {
        int bool = userInfo.getULink();
        bool = 0;
        return 0;
    }
}
