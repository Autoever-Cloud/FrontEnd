import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectMain from "./views/MainPage";
import StoreList from "./views/StoreList";
import WaitingSeatSelection from "./components/waiting/WaitingSeatSelection";
import ReservationSeatSelection from "./components/reservation/ReservationSeatSelection";
import MyPage from "./views/MyPage";

export default function Routing(){
    return (
        <div>
            <div style={{ marginTop: '64px' }}>
                <Routes>
                    <Route path='/' element={<ProjectMain/>} />
                    <Route path='/storelist' element={<StoreList/>} />
                    <Route path='/waitingseat' element={<WaitingSeatSelection/>} />
                    <Route path='/reservationseat' element={<ReservationSeatSelection/>} />
                    <Route path='/mypage' element={<MyPage/>}/>
                </Routes>
            </div>
        </div>
    )
}