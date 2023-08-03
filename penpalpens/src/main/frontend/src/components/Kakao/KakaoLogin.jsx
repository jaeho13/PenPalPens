import React from "react";

const KaKaoLogin = () => {

    const REST_API = process.env.REACT_APP_KAKAO_RESTAPI_KEY;

    const RE_DIRECT = process.env.REACT_APP_KAKAO_REDIRECT_URI;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API}&redirect_uri=${RE_DIRECT}&response_type=code`;

    const handleLogin = () => {
        window.location.href = KAKAO_AUTH_URL
    }

    return (
        <>
            <button onClick={handleLogin}>카카오 로그인</button>
        </>
    );
}

export default KaKaoLogin;

