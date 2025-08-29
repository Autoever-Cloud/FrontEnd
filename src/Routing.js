import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectMain from "./views/MainPage";
import ReservationList from "./views/ReservationList";
import WaitingSeatSelection from "./components/waiting/WaitingSeatSelection";
import MyPage from "./views/MyPage";

export default function Routing(){
    return (
        <div>
            <div style={{ marginTop: '64px' }}>
                <Routes>
                    <Route path='/' element={<ProjectMain/>} />
                    <Route path='/reservationlist' element={<ReservationList/>} />
                    <Route path='/waitingseat' element={<WaitingSeatSelection/>} />
                    <Route path='/mypage' element={<MyPage/>}/>
                </Routes>
            </div>
        </div>
    )
}