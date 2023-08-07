import React from "react";
import axios from "axios"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

const KakaoInfo = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('token')

    useEffect(() => {
        // Kakao 로그인 요청을 보낼 URL
        const url = `/login/penpalpens/userInfo?token=${token}`;

        // axios를 사용하여 서버에 요청 보내기
        axios
            .get(url)
            .then((res) => {
                const userEmail = res.data.userInfo.uEmail;
                const userNick = res.data.userInfo.uNick;
                // 요청이 성공한 경우 서버 응답을 처리할 수 있습니다.
                navigate("/choose")
                console.log(userEmail, userNick)
            })
            .catch((error) => {
                // 요청이 실패한 경우 에러를 처리할 수 있습니다.
            });
    }, [token]); // code가 변경될 때마다 useEffect 실행
}

export default KakaoInfo;