import React from "react";
import {Route, Routes} from "react-router-dom";
import ProjectMain from "./views/MainPage";
import WaitingList from "./views/WaitingList";

export default function Routing(){
    return (
        <div>
            <div style={{ marginTop: '90px' }}>
                <Routes>
                    <Route path='/' element={<ProjectMain/>} />
                    <Route path='/waitinglist' element={<WaitingList/>} />
                </Routes>
            </div>
        </div>
    )
}