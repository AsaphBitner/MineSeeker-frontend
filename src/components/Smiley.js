import React from "react";
import { useSelector } from "react-redux";
// import { changeSmiley } from "../store/actions"
// import { connect } from "react-redux";
// import {useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'


export default function Smiley(props) {
    // const [extraLives, setExtraLives] = useState(props.extraLives) 
    // const [smiley, setSmiley] = useState('') 
    // const smile = '🙂'
    // const sadFace = '😥';
    // const coolFace = '😎';

    // useEffect(() => {
    //     setSmiley(prevSmiley => props.smiley)
    // }, [props.smiley])
    let state = useSelector(state => state)
    const smiley = state.smiley

    return (
        <div className="smiley" onClick={()=> props.startNewGame(props.boardSize)} >
         {smiley}
        </div>
    )
}

// const mapStateToProps = state => {
//     return {...state}
//   }
//   const mapDispatchToProps = {
//     changeSmiley,
//   }

//   export const Smiley = connect(mapStateToProps, mapDispatchToProps)(_Smiley)
