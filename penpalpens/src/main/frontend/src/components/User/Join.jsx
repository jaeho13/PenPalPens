import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const Join = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };


    return (
        <>
            <Header>
                <Back onClick={goLogin}>뒤로가기</Back>
            </Header>

            <All>
                <Comments>아이디</Comments>
                <Write2>
                    <Write placeholder="penpalpens" />
                </Write2>
                <Comments>비밀번호</Comments>
                <Write2>
                    <Write placeholder="********" type="password" />
                </Write2>
                <Comments>닉네임</Comments>
                <Write2>
                    <Write placeholder="짱구" />
                </Write2>
                <Comments>이메일</Comments>
                <Write2>
                    <Write placeholder="penpalpens@gmail.com" />
                </Write2>
                <Bind>
                    <MakeButton onClick={goLogin}>가입하기</MakeButton>
                    <CancleButton onClick={goLogin}>취소하기</CancleButton>
                </Bind>
            </All>
        </>
    );
}

export default Join;

const Header = styled.div`
    width: 100%;
    height: 4rem;
    border: 3px solid black;
`

const Back = styled.div`
    width: 10%;
    height: 4rem;
    border: 2px solid red;
    margin-left: 2rem;
    cursor: pointer;
`

const All = styled.div`
    width: 40%;
    height: 50rem;
    border: 2px solid black;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 5rem;
`

const Comments = styled.div`
    width: 70%;
    height: 3rem;
    font-size: 2rem;
    border: 2px solid skyblue;
    border-radius: 2rem;
    /* margin-left: 2rem; */
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
`

const Write2 = styled.div`
`

const Write = styled.input`
    width: 70%;
    height: 3rem;
    font-size: 2rem;
    border: 2px solid red;
    border-radius: 2rem;
    /* margin-left: 2rem; */
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bind = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 3rem;
`

const MakeButton = styled.div`
    width: 30%;
    height: 5rem;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 8rem;
`

const CancleButton = styled.div`
    width: 30%;
    height: 5rem;
    font-size: 2rem;
    border: 2px solid black;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
`