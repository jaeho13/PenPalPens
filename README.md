## 🚀 프로젝트 이름
### PenPalPens - PenPal(펜팔) + Pens(펜스)
<br />

## 🚀 프로젝트 개요
### 멀리 떨어진 친구와 편지나 메세지를 주고받으며 교류한다는 의미의 “펜팔(Penpal)"과 일기를 쓰는데 사용되는 "펜(Pen)"을 합친 의미로 웹에서 친구와 서로 교환일기를 작성하고 소통할 수 있는 일기장 구현
<br />

## 🚀 프로젝트 기간
### 23.07.19 ~ 23.08.19 (1개월)
<br />

## 🚀 프로젝트 목적
### Front-end - React, Spring을 연동한 CRUD 구현 및 카카오 로그인 API 사용
### Back-end - REST API 설계 및 카카오 로그인 API 사용 학습
<br />

## 🚀 프로젝트 기능
### 카카오 API를 활용한 로그인 구현
### RESTful API를 이용한 CRUD 구현
### 초대코드를 이용한 유저간 데이터 연결
<br />

## 🚀 프로젝트 초안
### 1. 로그인 시 개인 일기와 친구와 적을 수 있는 교환일기 중 진행할 일기를 선택합니다.
### 2. 개인 일기 선택시, 일기를 작성하면 해당 글을 작성한 날짜와 제목을 리스트 형식으로 출력하여 글을 볼 수 있습니다.
### 3. 교환 일기 선택시, 100가지 질문이 준비되어 있고 하루에 하나씩 질문이 바뀌며, 질문에 대한 답변과 일기를 작성할 수 있습니다.
<br />

## 🚀 프로젝트 구상도
![IMG_2020](https://github.com/jaeho13/PenPalPens/assets/108074336/d4f98f9d-640f-4b09-a8a4-ba9e3f134145)
<br />

## 🚀 프로젝트 ERD
<img width="1200" alt="스크린샷 2023-09-22 오전 12 16 37" src="https://github.com/jaeho13/PenPalPens/assets/108074336/2afa873c-39e7-45b5-ada6-70c35d7ace6f">

<br />

## 🚀 프로젝트 결과
### 시작화면 : 카카오 로그인
<img width="1200" alt="스크린샷 2023-09-22 오전 12 20 58" src="https://github.com/jaeho13/PenPalPens/assets/108074336/fb9a5072-c5a5-4e7f-8a6e-22da7a1a839c">

### 일기 선택
화면 : 개인 일기와 교환 일기 중 선택한다. 
<img width="1272" alt="스크린샷 2023-09-22 오전 12 23 29" src="https://github.com/jaeho13/PenPalPens/assets/108074336/7dfb0439-2e49-45c8-8b5a-13a479f9b81c">

### 교환 일기 : 교환 일기가 연결된 친구가 없다면 서비스를 이용할 수 없다.
<img width="1258" alt="스크린샷 2023-09-22 오전 12 26 20" src="https://github.com/jaeho13/PenPalPens/assets/108074336/c8769fb9-9289-4763-91da-15c3d3479d0d">

### 교환 일기 : 친구의 초대 코드를 입력해 교환 일기 서비스를 시작할 수 있다.
<img width="1273" alt="스크린샷 2023-09-22 오전 12 26 30" src="https://github.com/jaeho13/PenPalPens/assets/108074336/630bf786-ce9a-4054-93d3-10d0005ae68d">

### 교환 일기 : 이미 연결된 친구가 존재하면 초대 코드를 재 생성할 수 없다. 
<img width="1262" alt="스크린샷 2023-09-22 오전 12 25 28" src="https://github.com/jaeho13/PenPalPens/assets/108074336/230fa397-d03c-4e45-a7fe-fde28cf73c30">

### 교환 일기 : 친구와 함께 교환 일기를 작성할 수 있다. 공통 질문에 두 사람 다 답변을 했다면 다음 질문으로 넘어간다.
<img width="1271" alt="스크린샷 2023-09-22 오전 12 27 13" src="https://github.com/jaeho13/PenPalPens/assets/108074336/3d9fe937-b275-4e78-8d1a-831f6e12b135">


### 교환 일기 : 오늘의 질문에 대한 답변과 친구에게 전하고 싶은 말 OR 일기를 적을 수 있다. 
<img width="1267" alt="스크린샷 2023-09-22 오전 12 27 26" src="https://github.com/jaeho13/PenPalPens/assets/108074336/a38a63cb-a75c-4725-b239-3d2f0d5b9988">


### 개인 일기 : 개인 일기를 작성하고 볼 수 있는 페이지이다.
<img width="1271" alt="스크린샷 2023-09-22 오전 12 35 12" src="https://github.com/jaeho13/PenPalPens/assets/108074336/b6543732-cfac-4356-b946-8092ca087c00">
<img width="1275" alt="스크린샷 2023-09-22 오전 12 25 16" src="https://github.com/jaeho13/PenPalPens/assets/108074336/a2881b72-89e8-4a06-86d5-397e0fb51740">


<br />

## 🚀 느낀점
### Front-end - CRUD를 구현하면서 어떻게 코드를 진행할지 알게 되었고, 카카오 API를 통한 로그인 구현도 배울 수 있었다.
### Back-end - 생각한 것 보다 어려웠던 DB를 구현함으로써 다시 한 번 DB에 대해 배울 수 있었고 나아가 CRUD도 복기 할 수 있었다.
<br />
