import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/User/Login";
import Join from "./components/User/Join";
import Choose from "./components/User/Choose";
import Diary from "./components/Diary/Diary";
import DiaryWrite from "./components/Diary/DiaryWrite";
import DiaryFix from "./components/Diary/DiaryFix";
import DiaryRead from "./components/Diary/DiaryRead";
import Share from "./components/Share/Share";
import ShareWrite from "./components/Share/ShareWrite";
import ShareFix from "./components/Share/ShareFix";
import ShareRead from "./components/Share/ShareRead"
import KakaoLogin from "./components/Kakao/KakaoLogin";



const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/choose" element={<Choose />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/diaryRead" element={<DiaryRead/>} />
          <Route path="/diarywrite" element={<DiaryWrite />} />
          <Route path="/diaryFix" element={<DiaryFix />} />
          <Route path="/share" element={<Share />} />
          <Route path="/shareRead" element={<ShareRead />} />
          <Route path="/sharewrite" element={<ShareWrite />} />
          <Route path="/shareFix" element={<ShareFix />} />
          <Route path="/kakaologin" element={<KakaoLogin />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;