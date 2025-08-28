import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectMain from "./views/MainPage";
import ReservationList from "./views/ReservationList";
import MyPage from "./views/MyPage";

export default function Routing(){
    return (
        <div>
            <div style={{ marginTop: '90px' }}>
                <Routes>
                    <Route path='/' element={<ProjectMain/>} />
                    <Route path='/reservationlist' element={<ReservationList/>} />
                    <Route path='/mypage' element={<MyPage/>}/>
                </Routes>
            </div>
        </div>
    )
}