package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Random;

@Service
public class ShareService {
    @Autowired
    UserRepository userRepository;

    public void makeCode(UserInfo userInfo) {

        //유저 정보에 연결된 코드(uLink)가 존재하는지 확인
        //만약 연결된 링크가 없고 중복이 없니?
        Boolean bool = true;
//
//        if(userInfo.getULink().equals(null){
//            Random random = new Random();
//            int num = 0;
//            do{
//                num = random.nextInt(90000000) + 10000000;
//                userRepository.findByuRandom(num);
//            }while(bool); //true인 동안만 do문 실행
//
//            System.out.println("random Num = "+ num);
//           // Boolean bool = userRepository.findByuRandom(num); // 값이 있으면 true
//            if(bool == true)
//
//            userInfo.setURandom(num);
//        }
    }
}
