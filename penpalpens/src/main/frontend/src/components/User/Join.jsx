import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const Join = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };


    return (
        <>
            <Background>
                <BackgroundImg src="/images/join.png" alt="배경" />
                <Header>
                    <HeaderBind>
                        <Back>
                            <BackImage onClick={goLogin}>
                                <MdKeyboardDoubleArrowLeft />
                            </BackImage>
                        </Back>
                        <Logo>
                            <LogoImage src="/images/Logo.png" alt="로고" />
                        </Logo>
                        <LogOut>
                            <LogOutImage onClick={goLogin}>
                            </LogOutImage>
                        </LogOut>
                    </HeaderBind>
                </Header>

                <Peel>
                    <Title>회원가입</Title>
                    <Write placeholder="아이디" />
                    <Write placeholder="비밀번호" type="password" />
                    <Write placeholder="닉네임" />
                    <Write placeholder="이메일" />
                    <Bind>
                        <MakeButton onClick={goLogin}>가입하기</MakeButton>
                        <CancleButton onClick={goLogin}>취소하기</CancleButton>
                    </Bind>
                </Peel>
            </Background>
        </>
    );
}

export default Join;

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

const Header = styled.div`
    width: 100%;
    height: 4rem;
`

const HeaderBind = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Back = styled.div`
  width: 5%;
  height: 4rem;
  font-size: 6rem;
  margin-top: 1.5rem;
  color: #3e5af5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackImage = styled.div`
  cursor: pointer;
`

const Logo = styled.div`
  width: 30%;
  height: 4rem;
  margin-top: 3rem;
  /* border: 2px solid red;
  border-radius: 2rem; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogoImage = styled.img`
    width: 100%;
    height: 20rem;
    padding-top: 2rem;
`

const LogOut = styled.div`
  width: 5%;
  height: 4rem;
  font-size: 4rem;
  /* border: 2px solid red;
  border-radius: 2rem; */
  margin-top: 1.5rem;
  color: #3e5af5;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LogOutImage = styled.div`
  cursor: pointer;
`

const Peel = styled.div`
    width: 70%;
    height: 50rem;
    border-radius: 2rem;
    background-color: rgba(45, 45, 45, 0.5);
    margin: 0 auto;
    margin-top: 3rem;
    padding: 1rem;
`

const Title = styled.div`
    width: 50%;
    height: 3rem;
    border-radius: 2rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Write = styled.input`
    width: 50%;
    height: 4rem;
    font-size: 2rem;
    border: 2px solid #fdf6e4;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdf6e4;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 4rem;
    justify-content: center;
`

const MakeButton = styled.div`
    width: 20%;
    height: 5rem;
    font-size: 2rem;
    color: #fdf6e4;
    border: 2px solid black;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: grey;
    cursor: pointer;
`

const CancleButton = styled.div`
    width: 20%;
    height: 5rem;
    font-size: 2rem;
    color: #fdf6e4;
    border: 2px solid black;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdf6e4;
    background-color: grey;
    margin-left: 5rem;
    cursor: pointer;
`