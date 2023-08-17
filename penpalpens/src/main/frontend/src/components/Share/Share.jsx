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
            <Background>
                <BackgroundImg src="/images/space.png" alt="배경" />
                <Header>
                    <HeaderBind>
                        <Back>
                            <BackImage>
                                <MdKeyboardDoubleArrowLeft onClick={goChoose} />
                            </BackImage>
                        </Back>
                        <Logo>
                            <LogoImage src="/images/Logo.png" alt="로고" />
                        </Logo>

                        <LogOut>
                            <LogOutImage>
                                <BiSolidLockOpenAlt onClick={goLogin} />
                            </LogOutImage>
                        </LogOut>
                    </HeaderBind>
                </Header>

                <Question>오늘의 질문 : </Question>

                <RabbitImage src="/images/rabbit.png" alt="토끼" />
                <DogImage src="/images/dog.png" alt="곰" />

                <Peel>
                    <Main>
                        <DateBind>
                            <Box></Box>
                            <Day>
                                {formattedFull}
                            </Day>
                            <Write onClick={goWrite}>글쓰기</Write>
                        </DateBind>

                        <DiaryList>
                            <DailyDateExam>
                                날짜
                            </DailyDateExam>
                            <DailyTitleExam>
                                제목
                            </DailyTitleExam>
                            <DailyChangeExam>
                                닉네임
                            </DailyChangeExam>
                        </DiaryList>

                        <DiaryList>
                            <DailyDate>
                                {formattedDate}
                            </DailyDate>
                            <DailyTitle onClick={goRead}>제목</DailyTitle>
                            <DailyChange>
                                닉네임
                            </DailyChange>
                        </DiaryList>
                    </Main>
                </Peel>
            </Background>
        </>
    );
}

export default Share;

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
    margin-top: 1.5rem;
    color: #3e5af5;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LogOutImage = styled.div`
    cursor: pointer;
`

const DogImage = styled.img`
    width: 25%;
    height: 35rem;
    position: absolute;
    top: 40%;
`

const RabbitImage = styled.img`
    width: 25%;
    height: 35rem;
    position: absolute;
    top: 15%; left: 74%;
`

const Question = styled.div`
    width: 70%;
    height: 3rem;
    border: 2px solid #fdf6e4;
    border-radius: 1rem;
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fdf6e4;
`

const Peel = styled.div`
    width: 70%;
    height: 38rem;
    border: 2px solid #fdf6e4;
    border-radius: 2rem;
    background-color: rgba(59, 59, 59, 0.4);
    margin: 0 auto;
    margin-top: 2rem;
`

const Main = styled.div`
    width: 80%;
    height: 36rem;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 1rem;
    background-color: #fdf6e4;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
`

const DateBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 2rem;
`

const Box = styled.div`
    width: 20%;
    height: 5rem;
    border-radius: 2rem;
`

const Day = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin-right: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Write = styled.div`
    width: 10%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin-right: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    cursor: pointer;
`

const DiaryList = styled.div`
    width: 90%;
    height: 3rem;
    border: 2px solid #3e5af5;
    border-radius: 1rem;
    margin: 0 auto;
    /* margin-top: 0.5rem; */
    margin-bottom: 1.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const DailyDateExam = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #797979;
    /* background-color: #595959; */
`

const DailyDate = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #595959; */
`

const DailyTitleExam = styled.div`
    width: 60%;
    height: 3rem;
    border: 2px dashed #3e5af5;
    border-top: 0;
    border-bottom: 0;
    padding-left: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #797979;
`

const DailyTitle = styled.div`
    width: 60%;
    height: 3rem;
    border: 2px dashed #3e5af5;
    border-top: 0;
    border-bottom: 0;
    padding-left: 1rem;
    font-size: 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
`

const DailyChangeExam = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 3rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #797979;
`


const DailyChange = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 3rem;
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
