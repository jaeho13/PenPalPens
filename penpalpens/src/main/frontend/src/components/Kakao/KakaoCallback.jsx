import React from "react";

const KakaoCallback = () => {

    const code = new URL(window.location.href).searchParams.get("code");
    console.log(code)
    axios({
        method : "GET",
        url : `/login/penpalpens?code=${code}`
    })
    .then((res) => {
        console.log(res.data); //
    })

    return (
        <>
        </>
    );
}

export default KakaoCallback;