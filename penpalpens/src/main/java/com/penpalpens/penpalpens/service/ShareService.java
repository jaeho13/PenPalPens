package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class ShareService {
    @Autowired
    UserRepository userRepository;

    public Map<String, Object> makeCode(UserInfo userInfo) {

        Map<String, Object> map = new HashMap<>();
        // 연결 된 일기장 있는지 먼저 확인
        Boolean bool = userInfo.getULink();
        bool = false;
        if (bool == true) {
            map.put("boolean", bool);
            map.put("code", userInfo.getURandom());
            return map;
        }

        map.put("boolean", bool);
        map.put("code", 123456789);
        return map;
        //
        // //유저 정보에 연결된 일기가 있는지(uLink) 확인
        // //1. 연결된 일기가 없는 경우에만 난수 생성하여 코드 보냄
        // Boolean check = userInfo.getULink();
        // if(check == false || userInfo.getURandom()==0){
        // Boolean bool = true; //while을 돌기위해 사용
        // int num = 0; //난수
        // Random random = new Random();
        //
        // do { //while이 참인경우 do의 내용 반복
        // num = random.nextInt(90000000) + 10000000; //랜덤 값 생성
        // bool = userRepository.findByuRandom(num).equals(null) ? true : false; // 랜덤
        // 값이 이미 존재하는지 확인
        // } while (bool); //true인 동안만 do문 실행
        //
        // }
        // System.out.println("======="+userInfo.getURandom()+userInfo.getULink());
        //

    }

    public Boolean shareCode(UserInfo userInfo) {
        Boolean bool = userInfo.getULink();
        return bool;
    }
}
