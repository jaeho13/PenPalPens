import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiSolidLockOpenAlt } from "react-icons/bi";

const Choose = () => {
    const navigate = useNavigate();

    const [makeModal, setMakeModal] = useState(false);

    const [enterModal, setEnterModal] = useState(false);

    const goLogin = () => {
        sessionStorage.clear();
        navigate("/");
    };

    const goDiary = () => {
        navigate("/diary");
    };

    const goChoose = () => {
        navigate("/choose");
    };

    const modal = () => {
        setMakeModal(!makeModal);
    };

    const modal3 = () => {
        setEnterModal(!enterModal);
    };

    const [makeCode, setMakeCode] = useState([]);
    const [bool, setBool] = useState();
    const [code, setCode] = useState();

    // useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await axios.get('/share/makeCode');
            setBool(response.data.boolean);
            setCode(response.data.code);
            //접근 코드 이름
            console.log(response.data.boolean);
            console.log(response.data.code);
        } catch (error) {
            console.error(error);
        }
        modal()
    };
    // fetchData();
    // }, []);

    return (
        <>
            <Background>
                <BackgroundImg src="/images/space.png" alt="배경" />
                <Header>
                    <HeaderBind>
                        <Back>
                            <BackImage onClick={goLogin}>
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
                <Total>
                    <Left>
                        <Title>일기장</Title>
                        <FolderImage src="/images/folder.png" />
                        <Write onClick={goDiary} >들어가기</Write>
                    </Left>
                    <Right>
                        <Title>교환 일기</Title>
                        <FolderImage src="/images/folder.png" />
                        <ShareBind>
                            <Make onClick={fetchData}>만들기</Make>
                            <Enter onClick={modal3} >들어가기</Enter>
                        </ShareBind>
                    </Right>
                </Total>

                {makeModal && (
                    <ModalWrapper>
                        <Modal>
                            <ModalTitle>초대코드</ModalTitle>
                            <ModalTip>*초대코드를 공유하여 친구와 교환일기를 시작해보세요.</ModalTip>
                            <ModalCode>
                                {bool ? (
                                    <div>이미 교환 일기 코드가 있습니다.</div>
                                ) : (
                                    <div>{code}</div>
                                )}
                            </ModalCode>
                            <ModalButton onClick={modal}>확인</ModalButton>
                        </Modal>
                    </ModalWrapper >
                )}


                {enterModal && (
                    <ModalWrapper>
                        <Modal>
                            <ModalTitle>초대코드 입력</ModalTitle>
                            <ModalTip>*초대코드를 공유하여 친구와 교환일기를 시작해보세요.</ModalTip>
                            <ModalEnter type="text" placeholder="*초대 코드 입력" />
                            <ModalButton onClick={modal3}>확인</ModalButton>
                        </Modal>
                    </ModalWrapper >
                )}
            </Background>
        </>
    );
};

export default Choose;

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
    /* border: 2px solid red;
    border-radius: 2rem; */
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
    /* border: 2px solid red;
    border-radius: 2rem; */
    margin-top: 1.5rem;
    color: #3e5af5;
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
    margin-top: 13rem;
`

const Left = styled.div`
    width: 45%;
    height: 30rem;
    border: 5px solid #fdf6e4;
    border-radius: 2rem;
    margin: 0 auto;
    background-color: rgba(59, 59, 59, 0.5);
`

const Right = styled.div`
    width: 45%;
    height: 30rem;
    border: 5px solid #fdf6e4;
    border-radius: 2rem;
    margin: 0 auto;
    background-color: rgba(59, 59, 59, 0.5);
`

const Title = styled.div`
    width: 50%;
    height: 3rem;
    color: #fdf6e4;
    border-radius: 2rem;
    margin: 0 auto;
    margin-top: 2rem;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(59, 59, 59, 0.5); */
`

const FolderImage = styled.img`
    width: 60%;
    height: 20rem;
    display: flex;
    margin: 0 auto;
`

const Write = styled.div`
    width: 50%;
    height: 3rem;
    /* border: 2px solid black; */
    border-radius: 2rem;
    color: #fdf6e4;
    margin: 0 auto;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e5af5;
    cursor: pointer;
`

const ShareBind = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

`

const Make = styled.div`
    width: 35%;
    height: 3rem;
    /* border: 2px solid black; */
    border-radius: 2rem;
    color: #fdf6e4;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e5af5;
    cursor: pointer;
`

const Enter = styled.div`
    width: 35%;
    height: 3rem;
    /* border: 2px solid black; */
    border-radius: 2rem;
    color: #fdf6e4;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3e5af5;
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
    width: 40%;
    height: 30rem;
    /* background-color: #fdf6e4; */
    background-color: white;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ModalTitle = styled.div`
    width: 80%;
    height: 3rem;
    /* border: 2px solid black; */
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalTip = styled.div`
    width: 80%;
    height: 3rem;
    /* border: 2px solid black; */
    /* font-size: 1.5rem; */
    font-size: 1.5rem;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const ModalCode = styled.div`
    width: 70%;
    height: 3rem;
    border: 2px solid #595959;
    border-radius: 2rem;
    font-size: 1.5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const ModalEnter = styled.input`
    width: 40%;
    height: 3rem;
    border: 2px solid #595959;
    border-radius: 2rem;
    font-size: 1.5rem;
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`

const ModalButton = styled.button`
    width: 25%;
    height: 3rem;
    border: 2px solid #3e5af5;
    margin-top: 3rem;
    font-size: 2rem;
    color: #fdf6e4;
    background-color: #3e5af5;
    border-radius: 1rem;
    cursor: pointer;
`