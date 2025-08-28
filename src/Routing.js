import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectMain from "./views/MainPage";
import WaitingList from "./views/WaitingList";
import WaitingSeatSelection from "./components/waiting/WaitingSeatSelection";
import BookingList from "./views/BookingList";

export default function Routing(){
    return (
        <div>
            <div style={{ marginTop: '90px' }}>
                <Routes>
                    <Route path='/' element={<ProjectMain/>} />
                    <Route path='/waitinglist' element={<WaitingList/>} />
                    <Route path='/waitingseat' element={<WaitingSeatSelection/>} />
                    <Route path='/bookinglist' element={<BookingList/>} />

                </Routes>
            </div>
        </div>
    )
}