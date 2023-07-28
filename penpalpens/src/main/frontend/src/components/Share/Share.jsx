import React from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const Share = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };

    const goChoose = () => {
        navigate("/choose");
    };

    const goWrite = () => {
        navigate("/sharewrite");
    };

    const goRead = () => {
        navigate("/shareread");
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
                        <BackImage>
                            <MdKeyboardDoubleArrowLeft onClick={goChoose} />
                        </BackImage>
                    </Back>
                    <Logo onClick={goChoose} >
                        <LogoImage src="/images/Logo.png" alt="로고" />
                    </Logo>

                    <LogOut>
                        <LogOutImage>
                            <BiSolidLockOpenAlt onClick={goLogin} />
                        </LogOutImage>
                    </LogOut>
                </HeaderBind>
            </Header>

            <Question>오늘의 질문</Question>
            <Background>
                <DateBind>
                    <Box></Box>
                    <Day>
                        {formattedFull}
                    </Day>
                    <Write onClick={goWrite}>글쓰기</Write>
                </DateBind>

                <DiaryList>
                    <DailyDate>
                        {formattedDate}
                    </DailyDate>
                    <DailyTitle onClick={goRead}>제목</DailyTitle>
                    <DailyChange>
                        작성자 이름
                    </DailyChange>
                </DiaryList>
            </Background>
        </>
    );
}

export default Share;

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


const Background = styled.div`
    width: 65%;
    height: 50rem;
    border: 2px solid red;
    border-radius: 2rem;
    margin: 0 auto; 
    margin-top: 3rem;
    /* margin-bottom: 30rem; */
    background-color: #d4d4d4;
`

const Question = styled.div`
    width: 65%;
    height: 5rem;
    border: 2px solid purple;
    border-radius: 2rem;
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DateBind = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-top: 2rem; */
    justify-content: space-between;
    align-items: center;
    border: 2px solid purple;
    border-radius: 2rem;
    
`

const Box = styled.div`
    width: 20%;
    height: 5rem;
    border: 2px solid blue;
    border-radius: 2rem;
`

const Day = styled.div`
    width: 20%;
    height: 5rem;
    border: 2px solid blue;
    border-radius: 2rem;
    font-size: 2rem;
    /* margin: 0 auto; */
    /* margin-left: 50rem; */
    display: flex;
    justify-content: center;
    align-items: center;
`

const Write = styled.div`
    width: 20%;
    height: 5rem;
    border: 2px solid green;
    border-radius: 2rem;
    font-size: 3rem;
    /* margin: 0 auto; */
    /* margin-left: 10rem; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const DiaryList = styled.div`
    width: 70%;
    height: 6rem;
    border: 2px solid black;
    border-radius: 3rem;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const DailyDate = styled.div`
    width: 20%;
    height: 6rem;
    border: 2px solid blue;
    border-radius: 3rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DailyTitle = styled.div`
    width: 60%;
    height: 6rem;
    border: 2px solid green;
    border-radius: 3rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const DailyChange = styled.div`
    width: 20%;
    height: 6rem;
    border: 2px solid red;
    border-radius: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`