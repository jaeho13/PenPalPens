package com.penpalpens.penpalpens.service;

import com.penpalpens.penpalpens.entity.Question;
import com.penpalpens.penpalpens.entity.Shared;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.QuestionRepository;
import com.penpalpens.penpalpens.repository.ShareRepository;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class ShareService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ShareRepository shareRepository;

    @Autowired
    QuestionRepository questionRepository;

    public Map<String, Object> makeCode(UserInfo userInfo) {
        Random random = new Random();
        Map<String, Object> map = new HashMap<>();


        if (userInfo.getULink() != 0) {
            System.out.println("이미 다른 일기장과 연결된 회원");

            map.put("boolean", 1);
            map.put("code", userInfo.getURandom());

            return map;

        } else if (userInfo.getURandom() == 0) { //연결된 일기장이 없다면?
            System.out.println("랜덤코드 생성 호출");
            int num;

            do {
                num = random.nextInt(90000000) + 10000000;
                System.out.println("num = " + num);
            } while (userRepository.findByuRandom(num) != null);

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
        return bool;
    }

    public int sendCode(int code, UserInfo userInfo) {
        UserInfo user = userRepository.checkUserCode(code);
        if(user!=null){
            UserInfo linkUser = userRepository.checkUserCode(code);
            System.out.println("초대코드가 일치하는 회원 발견!");

            //1. 연결 된 회원 0>1로 변경
            linkUser.setULink(1);
            linkUser.setURandom(code);

            //2. 요청 회원 0>1로 변경
            userInfo.setULink(1);
            userInfo.setURandom(code);

            //3. 저장하기
            userRepository.save(linkUser);
            userRepository.save(userInfo);

            return 1;
        }

        return 0;
    }

    public Map<String, Object> shareList(UserInfo userInfo) {
        System.out.println("글 리스트 호출");
        // 글 검색하기
        Map<String, Object> map = new HashMap<>();
        int uRandom = userInfo.getURandom();
        System.out.println("uRandom" + uRandom);
        String uEmail = userInfo.getUEmail();
        List<Shared> list = shareRepository.findByShareDiary(uRandom);

        System.out.println("일기 가져오기 성공" + list);
        String str = questionRepository.findByMy(userInfo.getMyQIdx());
        map.put("shareDiary" ,list);
        map.put("question", str);
        return map;
    }

    public void shareWrite(Map<String, Object> share, UserInfo userInfo) {
        Shared s = new Shared();

        UserInfo userVO = userRepository.findByuEmail(userInfo.getUEmail());
        UserInfo linkUser = new UserInfo();

        System.out.println(userVO+"일기 추가");
        String aContent = (String)share.get("aContent");
        String sContent = (String)share.get("sContent");

        int num = userInfo.getURandom();
        String user = userInfo.getUEmail();

        s.setAContent(aContent);
        s.setSContent(sContent);
        s.setUserInfoVO(userVO);
        s.setWeRandom(num);

        int qIdx = userInfo.getMyQIdx();
        System.out.println("----1");
        Question question = questionRepository.findByqIdx(qIdx);
        System.out.println("====2");
        String q = question.getQContent();
        System.out.println("질문내용 : "+ q);
        s.setUQuestion(q);

        s.setSDate(LocalDateTime.now());

        //질문에 대답 했다 > 1로 수정
        userVO.setUStatus(1);

        userRepository.save(userVO);

        String linkEmail = userRepository.findLinkUser(num, user);
        linkUser = userRepository.findByuEmail(linkEmail);
        System.out.println("링크유저 " + linkUser);

        if(userVO.getUStatus() == 1 && linkUser.getUStatus() == 1){
            //상태변화
            userVO.setUStatus(0);
            linkUser.setUStatus(0);

            //qIdx변화
            int num1 = userVO.getMyQIdx();
            int num2 = linkUser.getMyQIdx();

            System.out.println("=====김유리1" + num1);
            System.out.println("=====김유리2" + num2);

            userVO.setMyQIdx((userVO.getMyQIdx())+1);
            linkUser.setMyQIdx((linkUser.getMyQIdx())+1);
            userRepository.save(linkUser);
            userRepository.save(userVO);
        }

        shareRepository.save(s);

        System.out.println(s+"저장완료");

    }

    public void shareDelete(int num) {
        shareRepository.deleteById(num);
    }

    public Shared shareMyDiary(int num) {
        Shared s = shareRepository.findByMyDiary(num);

        return s;
    }

    public void ModifyShareDiary(Map<String, Object> share) {
        int sIdx = Integer.parseInt((String) share.get("sIdx"));
        String sContent = (String) share.get("sContent");
        String aContent = (String) share.get("aContent");

        Shared updateShare = shareRepository.findByMyDiary(sIdx);

        System.out.println(updateShare+"수정 글 가져오기");
        updateShare.setSContent(sContent);
        updateShare.setAContent(aContent);
        shareRepository.save(updateShare);
        System.out.println("업데이트 성공!!");
    }
}
