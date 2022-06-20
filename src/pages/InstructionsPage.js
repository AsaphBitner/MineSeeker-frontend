
import { useState, useEffect } from "react"
import { connect } from "react-redux"
// import {  } from "react-redux"
import { useNavigate } from "react-router-dom"
import MainGameHeadline from "../components/MainGameHeadline"

function _InstructionsPage(props){
    
    let kCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'B', 'A']
    const navigate = useNavigate()  
    const [AAA, setAAA] = useState('NOT CODE')
    const [codeKeys, setCodeKeys] = useState([])

    useEffect(() => {
        window.addEventListener('keydown', keyAction)

      return () => {
        window.removeEventListener('keydown', keyAction)
      }
    }, [codeKeys])



    useEffect(()=> {
        if (codeKeys.length === kCode.length) {setAAA('YES CODE!!!'); setCodeKeys(() => [])}
    }, [codeKeys])
    
    const keyAction = (ev)=> {
        if(!ev.key) {return}
        if(ev.key === 'Shift') {return}
        if(codeKeys.length === 2 && ev.key === 'ArrowUp'){return}
        if(ev.key.toLowerCase() === kCode[codeKeys.length].toLowerCase()){setCodeKeys((codeKeys) => [...codeKeys, ev.key])}
        else {setCodeKeys(() => []); setAAA('NOT CODE'); return}        
     }

    const navigateTo = (destination) => {
        navigate(destination)
    }


    return( 
        <div onClick={keyAction}>
            <MainGameHeadline />
            <button className="navigate-button" onClick={()=> navigateTo('/')}>GO TO MAIN PAGE</button>
            <h1>
                INSTRUCTION PAGE (under construction)
            </h1>
            <h1>
                {codeKeys}
            </h1>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1>
                {AAA}
            </h1>
            {/* <h1>
                {kCodeKeys}
            </h1> */}
        </div>
    )
}








const mapStateToProps = state => {
    return { ...state }
}
const mapDispatchToProps = {
    // changeBoardSize,
    // buildNewBoard,
    // changeGameOn,
    // changeGameOver,
    // changeNumOfMines,
    // changeLives,
    // changeSmiley,
    // changeFlags,
    // changeTime,
    // zeroTimer,
}

export const InstructionsPage = connect(mapStateToProps, mapDispatchToProps)(_InstructionsPage)













