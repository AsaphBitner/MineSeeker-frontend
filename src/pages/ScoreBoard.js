import React from "react";
import {useNavigate} from 'react-router-dom'


export default function ScoreBoard(props) {
    let navigate = useNavigate()
    const navigateTo = (target) => navigate(target)

       return (
        <div>
            <h1 onClick={() => navigateTo('/')}>
                To Gameboard
            </h1>
        </div>
        )    

}