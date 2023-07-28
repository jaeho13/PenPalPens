import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const ShareFix = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };

    const goChoose = () => {
        navigate("/choose");
    };

    const goshare = () => {
        navigate("/share");
    };

    const today = new Date();

    const formattedYear = today.getFullYear().toString().slice(-2);

    const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <>
            <Header>
                <HeaderBind>
                    <Back>
                        <BackImage onClick={goshare}>
                            <MdKeyboardDoubleArrowLeft />
                        </BackImage>
                    </Back>
                    <Logo>
                        <LogoImage onClick={goChoose} src="/images/Logo.png" alt="로고" />
                    </Logo>
                    <LogOut>
                        <LogOutImage onClick={goLogin}>
                            <BiSolidLockOpenAlt />
                        </LogOutImage>
                    </LogOut>
                </HeaderBind>
            </Header>

            <Day>
                {formattedFull}
            </Day>

            <BackgroundBind>

                <Background>
                    <Topic>오늘의 질문</Topic>
                    <TopicAnswer placeholder="*오늘의 대답" />
                </Background>

                <StickBind>
                    <Stick></Stick>
                    <Stick></Stick>
                    <Stick></Stick>
                    <Stick></Stick>
                    <Stick></Stick>
                    <Stick></Stick>
                    <Stick></Stick>
                </StickBind>

                <Background>
                    <Topic>오늘의 한마디</Topic>
                    <TopicAnswer placeholder="*하고 싶은 말" />
                </Background>

            </BackgroundBind>

            <ButtonBind>
                <Upload onClick={goshare} >수정하기</Upload>
                <Cancle onClick={goshare} >취소하기</Cancle>
            </ButtonBind>
        </>
    );
}

export default ShareFix;

const Header = styled.div`
    width: 100%;
    height: 4rem;
    /* border: 3px solid black; */
`

const HeaderBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Back = styled.div`
    width: 5%;
    height: 4rem;
    font-size: 4rem;
    /* border: 2px solid red;
    border-radius: 2rem; */
    margin-top: 1.5rem;
    color: #FE7D37;
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
    margin-top: 1rem;
    /* border: 2px solid red;
    border-radius: 2rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
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
    color: #FE7D37;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogOutImage = styled.div`
    cursor: pointer;
`

const Day = styled.div`
    width: 70%;
    height: 5rem;
    border: 2px solid blue;
    border-radius: 2rem;
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BackgroundBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;
`

const Background = styled.div`
    width: 32.5%;
    height: 50rem;
    border: 2px solid red;
    border-radius: 2rem;
    /* margin-top: 3rem; */
    background-color: #d4d4d4;
`

const StickBind = styled.div`
    display: flex;
    flex-direction: column;
    width: 3%;
    /* background-color: yellow; */
`

const Stick = styled.div`
    width: 100%;
    height: 2rem;
    border: 2px solid black;
    border-radius: 2rem;
    background-color: white;
    margin-top: 4rem;
`

const Topic = styled.div`
    width: 100%;
    height: 5rem;
    border: 2px solid purple;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopicAnswer = styled.textarea`
    width: 100%;
    height: 44rem;
    border: 2px solid green;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    text-align: start;
    background-color: #d4d4d4;
    /* margin-top: 1rem; */
    padding-top: 0.5rem;
    /* padding-left: 1rem; */
`

const ButtonBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 3rem;
    margin-bottom: 3rem;
    /* margin-right: 2rem; */
`

const Upload = styled.div`
    width: 15%;
    height: 5rem;
    border: 2px solid purple;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`

const Cancle = styled.div`
    width: 15%;
    height: 5rem;
    border: 2px solid purple;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
`