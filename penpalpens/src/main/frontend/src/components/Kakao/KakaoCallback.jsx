import React from "react";

const KakaoCallback = () => {

    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)

    return (
        <>
        </>
    );
}

export default KakaoCallback;