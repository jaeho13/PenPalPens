import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";


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
            <BackGround>
                <Main>
                    <Bind2>
                        <Bind>
                            <Id2>
                                <Id placeholder="아이디" />
                            </Id2>

                            <Pass2>
                                <Pass placeholder="비밀번호" type="password" />
                            </Pass2>
                        </Bind>
                        <Bind>
                            <Enter onClick={goChoose}>로그인</Enter>
                            <Join onClick={goJoin}>회원가입</Join>
                        </Bind>
                    </Bind2>
                </Main>
            </BackGround>
        </>
    )
}

export default Login;

const BackGround = styled.div`
    background-image: url(/images/Back1.png);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
`

const Main = styled.div`
    width: 30%;
    height: 20rem;
    border: 5px solid black;
    border-radius: 3rem;
    margin: 0 auto;
    margin-top: 19rem;
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
    border: 5px solid red;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
`

const Id2 = styled.div`
`

const Pass = styled.input`
    width: 90%;
    height: 4rem;
    border: 5px solid green;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
    margin-top: 1rem;
`


const Pass2 = styled.div`
`

const Enter = styled.div`
    width: 50%;
    height: 6rem;
    border: 5px solid pink;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-left: 2rem;
    background-color: pink;
    cursor: pointer;
`


const Join = styled.div`
    width: 50%;
    height: 2rem;
    border: 5px solid yellow;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    margin-left: 2rem;
    margin-top: 1rem;
    background-color: yellow;
    cursor: pointer;
`