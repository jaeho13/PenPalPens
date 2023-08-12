package com.penpalpens.penpalpens.service;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.penpalpens.penpalpens.entity.UserInfo;
import com.penpalpens.penpalpens.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class KakaoService {

    @Autowired
    UserRepository userRepository;

    // (카카오 로그인)
    // 프론트에서 보내준 코드로 카카오에서 인증 토큰 얻어오기
    public String getToken(String code) throws IOException {

        String access_token = "";
        String refresh_token = "";
        // 인가코드로 토큰받기
        String host = "https://kauth.kakao.com/oauth/token";

        try {
            URL url = new URL(host);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

            urlConnection.setRequestMethod("POST");
            urlConnection.setDoOutput(true); // 데이터 기록 알려주기

            BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(urlConnection.getOutputStream()));
            StringBuilder sb = new StringBuilder();
            sb.append("grant_type=authorization_code");
            sb.append("&client_id=21e07099dd4373823f42af19eaea7a3f");
            sb.append("&redirect_uri=http://localhost:3000/login/penpalpens"); // 프 서버로 바꾸기
            sb.append("&code=" + code);

            bw.write(sb.toString());
            bw.flush();

            // 결과 코드 200이면 통신 성공임!
            int responseCode = urlConnection.getResponseCode();
            System.out.println("responseCode = " + responseCode);

            // 요청 통해 얻은 JSON타입 Response 메세지 읽어오기
            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
            String line = "";
            String result = "";

            while ((line = br.readLine()) != null) {
                result += line;
            }
            System.out.println("response body = " + result);

            // Json 파싱 : Gson라이브러리에 포함된 클래스로 JSON 파싱 객체 생성
            JsonParser parser = new JsonParser();
            JsonElement elem = parser.parse(result);

            access_token = elem.getAsJsonObject().get("access_token").getAsString();
            refresh_token = elem.getAsJsonObject().get("refresh_token").getAsString();

            System.out.println("refresh_token = " + refresh_token);
            System.out.println("access_token = " + access_token);

            br.close();
            bw.close();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return access_token;
    }

    // 카카오 로그인 > 이 이메일이 회원 DB에 있어?? y > 로그인 : N > 회원가입
    // access_token 값 읽어오고 DB 저장
    public UserInfo getUserInfo(String access_token) {

        UserInfo userInfo = new UserInfo();
        String reqURL = "https://kapi.kakao.com/v2/user/me";

        try {
            URL url = new URL(reqURL); // 1. url객체 만들기
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            // 2. url에서 url connection 만들기
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Authorization", "Bearer " + access_token);

            // 키값, 속성 적용
            int responseCode = conn.getResponseCode(); // 서버에서 보낸 http 상태 코드 반환
            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            // 버퍼를 사용하여 읽은 것
            String line = "";
            String result = "";
            while ((line = br.readLine()) != null) {
                result += line;
            }

            JsonParser parser = new JsonParser();
            JsonElement element = parser.parse(result);
            JsonObject properties = element.getAsJsonObject().get("properties").getAsJsonObject();
            JsonObject kakao_account = element.getAsJsonObject().get("kakao_account").getAsJsonObject();

            String email = kakao_account.getAsJsonObject().get("email").getAsString();
            String nick = properties.getAsJsonObject().get("nickname").getAsString();


            userInfo = userRepository.findByuEmail(email);

            if (userInfo == null) {
                System.out.println("등록된 회원 아님");

                // userInfo 객체 생성 및 초기화
                userInfo = new UserInfo();

                userInfo.setUEmail(email);
                userInfo.setUNick(nick);
                userInfo.setULink(0);
                userInfo.setURandom(0);

                userRepository.save(userInfo);

                return userInfo;
            }


            userInfo.setUEmail(email);
            userInfo.setUNick(nick);

            System.out.println("유저정보 "+ userInfo);

        } catch (Exception e) {
            e.printStackTrace();
        }
        return userInfo;
    }
}
