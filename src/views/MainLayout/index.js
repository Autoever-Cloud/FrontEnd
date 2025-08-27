// 실행하면 뜨는 화면 통솔하는 애
// 로그인이 되어있으면 네비게이션+메인화면 (라우팅)
// 안되어있으면 로그인 화면

import React from "react";
import Authentication from "../Authentication";
import { BrowserRouter } from "react-router-dom";
import Navigation from '../Navigation'
import MainPage from "../MainPage";

export default function MainLayout(){
    return (
        <BrowserRouter>
            <Navigation/>
            <Authentication/>
        </BrowserRouter>
    )
}