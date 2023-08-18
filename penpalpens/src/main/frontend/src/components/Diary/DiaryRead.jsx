import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import axios from "axios";

const DiaryRead = () => {

    const navigate = useNavigate();

    const goLogin = () => {
        navigate("/");
    };

    const goDiary = () => {
        navigate("/diary");
    };

    const goChoose = () => {
        navigate("/choose");
    };


    const today = new Date();

    const formattedYear = today.getFullYear().toString().slice(-2);

    const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;


    const { dIdx } = useParams(); // URL 매개변수에서 dIdx 가져오기
    const [diary, setDiary] = useState({});

    useEffect(() => {
        const loadDiary = async () => {
            try {
                const response = await axios.get(`/diary/read?dIdx=${dIdx}`);
                setDiary(response.data);
                console.log("다이어리 정보 불러오기 성공", diary)
            } catch (error) {
                console.log("다이어리 정보 불러오기 실패", error);
            }
        };

        loadDiary();
    }, [dIdx]);


    return (
        <>
            <Background>
                <BackgroundImg src="/images/space.png" alt="배경" />
                <Header>
                    <HeaderBind>
                        <Back>
                            <BackImage onClick={goDiary}>
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

                {diary && diary.ddate && (
                    <Peel>
                        <Main>
                            <DateBind>
                                <Day>
                                    {`${diary.ddate.slice(2, 4)}년 ${diary.ddate.slice(5, 7)}월 ${diary.ddate.slice(8, 10)}일`}
                                </Day>
                            </DateBind>
                            <Title>{diary.dtitle}</Title>
                            <Board>{diary.dcontent}</Board>
                        </Main>
                    </Peel>
                )}


            </Background>

        </>
    );
}

export default DiaryRead;

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

const Peel = styled.div`
    width: 70%;
    height: 44rem;
    border: 2px solid #fdf6e4;
    border-radius: 2rem;
    background-color: rgba(59, 59, 59, 0.4);
    margin: 0 auto;
    margin-top: 10rem;
`

const Main = styled.div`
    width: 80%;
    height: 40rem;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    background-color: #fdf6e4;
`

const DateBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
`

const Day = styled.div`
    width: 20%;
    height: 3rem;
    border-radius: 1rem;
    font-size: 1.7rem;
    color: #fdf6e4;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

const Title = styled.div`
    width: 90%;
    height: 3rem;
    /* border: 2px solid #3e5af5; */
    border-radius: 1rem;
    font-size: 3rem;
    margin: 0 auto;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fdf6e4;
`

const Board = styled.div`
    width: 90%;
    height: 24rem;
    border: 2px solid #3e5af5;
    border-radius: 1rem;
    font-size: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    display: flex;
    align-items: top;
    background-color: #fdf6e4;
    overflow: auto; /* 스크롤 추가 */
    overflow-x: hidden; /* 가로 스크롤 제거 */
    white-space: pre-wrap;
`