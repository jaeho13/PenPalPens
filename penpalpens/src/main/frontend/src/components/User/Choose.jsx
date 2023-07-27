import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import Login from "./Login";

const Choose = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const goLogin = () => {
        navigate("/");
    };

    const goDiary = () => {
        navigate("/diary");
    };

    const goChoose = () => {
        navigate("/choose");
    };

    const modal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <Header>
                <HeaderBind>
                    <Back>
                        <BackImage onClick={goLogin}>
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
            <Total>
                <Left>
                    <Title>일기장</Title>
                    <Write onClick={goDiary}>이모티콘</Write>
                </Left>
                <Right>
                    <Title>교환 일기</Title>
                    <Make onClick={modal}>일기 만들기</Make>
                    <Enter>일기 들어가기</Enter>
                </Right>
            </Total>

            {showModal && (
                <ModalWrapper>
                    <Modal>
                        <ModalContent>초대코드</ModalContent>
                        <ModalTip>*초대코드를 공유하여 친구와 교환일기를 시작해보세요.</ModalTip>
                        <ModalCode>123456</ModalCode>
                        <ModalClose onClick={modal}>확인</ModalClose>
                    </Modal>
                </ModalWrapper >
            )}

        </>
    );
};

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

const Total = styled.div`
  width: 70%;
  height: 30rem;
  display: flex;
  flex-direction: row;
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
    cursor: pointer;
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
    cursor: pointer;
`

const ModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`

const Modal = styled.div`
    width: 20%;
    height: 25rem;
    background-color: white;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ModalContent = styled.div`
    width: 80%;
    height: 3rem;
    /* border: 2px solid black; */
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalTip = styled.div`
    width: 80%;
    height: 3rem;
    /* border: 2px solid black; */
    /* font-size: 1.5rem; */
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ModalCode = styled.div`
    width: 80%;
    height: 3rem;
    border: 2px solid purple;
    border-radius: 2rem;
    font-size: 1.5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalClose = styled.button`
    width: 25%;
    height: 3rem;
    margin-top: 3rem;
    font-size: 2rem;
    background-color: skyblue;
    border-radius: 1rem;
    cursor: pointer;
`

export default Choose;
