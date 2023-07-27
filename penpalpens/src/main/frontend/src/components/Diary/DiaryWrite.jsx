import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const DiaryWrite = () => {

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

    return (
        <>
            <Header>
                <HeaderBind>
                    <Back>
                        <BackImage onClick={goDiary}>
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

                <Background>
                    <DateBind>
                        <Day>
                            {formattedFull}
                        </Day>
                    </DateBind>
                    <Title>제목</Title>
                    <Board>글 내용</Board>
                    <ButtonBind>
                        <Upload>글올리기</Upload>
                        <Cancle onClick={goDiary}>취소하기</Cancle>
                    </ButtonBind>
                </Background>
            </Header>
        </>
    );
}

export default DiaryWrite;

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
  font-size: 6rem;
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
    margin-top: 3.5rem;
    background-color: #d4d4d4;
`

const DateBind = styled.div`
    display: flex;
    flex-direction: row;
    /* margin-top: 2rem; */
    justify-content: center;
    align-items: center;
    border: 2px solid purple;
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

const Title = styled.div`
    width: 100%;
    height: 5rem;
    border: 2px solid red;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 2rem;
`

const Board = styled.div`
    width: 100%;
    height: 25rem;
    border: 2px solid green;
    border-radius: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: start;
    /* align-items: center; */
    text-align: center;
    margin-top: 2rem;
`

const ButtonBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 3rem;
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
    cursor: pointer;
`