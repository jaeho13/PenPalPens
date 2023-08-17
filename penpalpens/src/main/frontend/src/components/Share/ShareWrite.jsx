import React, { useState } from "react";
import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import axios from "axios";

const ShareWrite = () => {

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

    const [sAnswer, setSAnswer] = useState("");
    const [sComment, setSComment] = useState("");
    const [sDate, setSDate] = useState("");

    const handleAnswerChange = (e) => {
        setSAnswer(e.target.value);
    };

    const handleCommentChange = (e) => {
        setSComment(e.target.value);
    };

    const handleDateChange = (e) => {
        setSDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!setSAnswer || !setSComment) {
            alert("제목과 내용을 모두 입력해주세요.");
            return;
        }

        axios({
            url: "/share",
            method: "post",
            data: {
                sAnswer,
                sComment,
                sDate,
            },
        })
            .then((response) => {
                console.log(response);
                navigate("/share");
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            <Background>
                <BackgroundImg src="/images/space.png" alt="배경" />
                <Header>
                    <HeaderBind>
                        <Back>
                            <BackImage onClick={goshare}>
                                <MdKeyboardDoubleArrowLeft />
                            </BackImage>
                        </Back>
                        <Logo>
                            <LogoImage src="/images/Logo.png" alt="로고" />
                        </Logo>
                        <LogOut>
                            <LogOutImage onClick={goLogin}>
                                <BiSolidLockOpenAlt />
                            </LogOutImage>
                        </LogOut>
                    </HeaderBind>
                </Header>

                <RabbitImage src="/images/rabbit.png" alt="토끼" />
                <DogImage src="/images/dog.png" alt="곰" />
                <Question>오늘의 질문 : </Question>
                <Peel>
                    <Main>
                        <DateBind>
                            <Cancle onClick={goshare} >취소하기</Cancle>
                            <Day>
                                {formattedFull}
                            </Day>
                            <Upload onClick={goshare} >글올리기</Upload>
                        </DateBind>

                        <TopicBind>
                            <Topic>오늘의 대답</Topic>
                            <Topic>오늘의 한 마디</Topic>
                        </TopicBind>

                        <form onSubmit={handleSubmit}>
                            <TopicAnswerBind>
                                <TopicAnswer
                                    type="text"
                                    placeholder="*내용"
                                    onChange={handleAnswerChange}
                                    value={sAnswer}
                                />
                                <TopicAnswer
                                    type="text"
                                    placeholder="*내용"
                                    onChange={handleCommentChange}
                                    value={sComment}
                                />
                            </TopicAnswerBind>
                        </form>

                    </Main>
                </Peel>
                <Leg></Leg>
                <Leg1></Leg1>
                <Leg2></Leg2>
                <Leg3></Leg3>
            </Background>
        </>
    );
}

export default ShareWrite;

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
    height: 3rem;
    /* border: 2px solid blue; */
    border-radius: 2rem;
    margin-top: 1rem;
`

const Day = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`
const ButtonBind = styled.div`
    width: 35%;
    height: 3rem;
    /* border: 2px solid blue; */
    border-radius: 2rem;
    margin-top: 1rem;
    margin-right: 1.5rem;
    display: flex;
    flex-direction: row;
`

const Upload = styled.div`
    width: 15%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin-top: 1rem;
    margin-right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    cursor: pointer;
`

const Cancle = styled.div`
    width: 15%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 2rem;
    color: #fdf6e4;
    margin-top: 1rem;
    margin-left: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    cursor: pointer;
`

const TopicBind = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

const Topic = styled.div`
    width: 45%;
    height: 3rem;
    border: 2px solid #3e5af5;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TopicAnswerBind = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`

const TopicAnswer = styled.textarea`
    width: 42%;
    height: 23rem;
    border: 2px solid #3e5af5;
    border-radius: 1rem;
    font-size: 2rem;
    display: flex;
    text-align: start;
    background-color: #fdf6e4;
    padding: 1rem;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
    white-space: pre-wrap; /*한 줄 꽉 차면 줄 바꿈*/
`

const Leg = styled.div`
    border-radius: 1rem;
    position: absolute;
    top: 55%;
    left: 49%; /* 변경: 선의 시작 위치를 왼쪽에서 25% 위치로 이동 */
    right: 49%; /* 변경: 선의 끝 위치를 오른쪽에서 25% 위치로 이동 */
    height: 1rem;
    background-color: #595959;
    /* transform: translateY(-50%); */
`

const Leg1 = styled.div`
    border-radius: 1rem;
    position: absolute;
    top: 65%;
    left: 49%; /* 변경: 선의 시작 위치를 왼쪽에서 25% 위치로 이동 */
    right: 49%; /* 변경: 선의 끝 위치를 오른쪽에서 25% 위치로 이동 */
    height: 1rem;
    background-color: #595959;
    /* transform: translateY(-50%); */
`

const Leg2 = styled.div`
    border-radius: 1rem;
    position: absolute;
    top: 75%;
    left: 49%; /* 변경: 선의 시작 위치를 왼쪽에서 25% 위치로 이동 */
    right: 49%; /* 변경: 선의 끝 위치를 오른쪽에서 25% 위치로 이동 */
    height: 1rem;
    background-color: #595959;
    /* transform: translateY(-50%); */
`

const Leg3 = styled.div`
    border-radius: 1rem;
    position: absolute;
    top: 85%;
    left: 49%; /* 변경: 선의 시작 위치를 왼쪽에서 25% 위치로 이동 */
    right: 49%; /* 변경: 선의 끝 위치를 오른쪽에서 25% 위치로 이동 */
    height: 1rem;
    background-color: #595959;
`