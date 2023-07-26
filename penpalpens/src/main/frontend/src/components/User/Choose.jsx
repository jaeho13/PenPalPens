import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Choose = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };

    const goDiary = () => {
        navigate("/diary");
    };

    return (
        <>
            <Header>
                <HeaderBind>
                    <Back onClick={goLogin}>뒤로가기</Back>
                    <Logo>로고 글씨</Logo>
                    <LogOut>로그아웃</LogOut>
                </HeaderBind>
            </Header>
            <Total>
                <Left>
                    <Title>일기장</Title>
                    <Write onClick={goDiary}>이모티콘</Write>
                </Left>
                <Right>
                    <Title>교환 일기</Title>
                    <Make>일기 만들기</Make>
                    <Enter>일기 들어가기</Enter>
                </Right>
            </Total>
        </>
    );
}

export default Choose;

const Header = styled.div`
    width: 100%;
    height: 4rem;
    border: 3px solid black;
`

const HeaderBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Back = styled.div`
    width: 10%;
    height: 4rem;
    border: 2px solid red;
    /* margin-left: 2rem; */
    cursor: pointer;
`

const Logo = styled.div`
    width: 30%;
    height: 4rem;
    border: 2px solid red;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogOut = styled.div`
    width: 10%;
    height: 4rem;
    border: 2px solid red;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 15rem;
`

const Total = styled.div`
    width: 70%;
    height: 30rem;
    display: flex;
    flex-direction: row;
    /* border: 3px solid black; */
    margin: 0 auto;
    margin-top: 10rem;
`

const Left = styled.div`
    width: 45%;
    height: 30rem;
    border: 5px solid blue;
    border-radius: 2rem;
    margin: 0 auto;
`

const Right = styled.div`
    width: 45%;
    height: 30rem;
    border: 5px solid red;
    border-radius: 2rem;
    margin: 0 auto;
`

const Title = styled.div`
    width: 60%;
    height: 5rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Write = styled.div`
    width: 30%;
    height: 11rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 4rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Make = styled.div`
    width: 60%;
    height: 5rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 4rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Enter = styled.div`
    width: 60%;
    height: 5rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 1rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`