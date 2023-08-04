import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import KakaoLogin from "../Kakao/KakaoLogin"


const Login = () => {

    const navigate = useNavigate();

    const goJoin = () => {
        navigate("/join");
    };

    const goChoose = () => {
        navigate("/choose");
    };

    return (
        <>
            <Background>
                <BackgroundImg src="/images/login.png" alt="배경" />
                <Main>
                    <KakaoLogin />
                    {/* <Bind2>
                        <Bind>
                            <Id placeholder="아이디" />
                            <Pass placeholder="비밀번호" type="password" />
                        </Bind>
                        <Bind>
                            <Enter onClick={goChoose}>로그인</Enter>
                        </Bind>
                    </Bind2>
                    <Ment onClick={goJoin} >*아직 회원이 아니신가요?? 회원가입 하러 가기</Ment> */}
                </Main>
            </Background>
        </>
    )
}

export default Login;

const Background = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`

const BackgroundImg = styled.img`
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`

const Main = styled.div`
    width: 30%;
    height: 20rem;
    border: 1px solid #595959;
    border-radius: 1rem;
    margin: 0 auto;
    margin-top: 19rem;
    background-color: rgba(100, 100, 100, 0.5);
`

const Bind = styled.div`
    width: 100%;
`

const Bind2 = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4.5rem;
    margin-left: 3rem;
`

const Id = styled.input`
  width: 90%;
  height: 4rem;
  border: 2px solid #fdf6e4;
  border-radius: 1rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 2rem;
  background-color: #fdf6e4;
`

const Pass = styled.input`
    width: 90%;
    height: 4rem;
    border: 2px solid #fdf6e4;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-top: 1rem;
    background-color: #fdf6e4;
`

const Enter = styled.div`
    width: 50%;
    height: 9rem;
    border: 5px solid #fdf6e4;
    color: #fdf6e4;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-left: 2rem;
    background-color: black;
    cursor: pointer;
`

const Ment = styled.div`
    width: 70%;
    height: 2rem;
    color: #fdf6e4;
    text-decoration: underline;
    display: flex;
    margin: 0 auto;
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`