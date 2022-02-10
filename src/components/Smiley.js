import React from "react";
import { useSelector } from "react-redux";
import { changeSmiley } from "../store/actions"
import { connect } from "react-redux";
// import {useEffect} from 'react'
// import cloneDeep from 'lodash/cloneDeep'


function _Smiley(props) {
    let state = useSelector(state => state)
    const smiley = state.smiley

    return (
        <div className="smiley" onClick={()=> props.resetGame(state.boardSize)} >
         <span>{smiley}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {...state}
  }
  const mapDispatchToProps = {
    changeSmiley,
  }

  export const Smiley = connect(mapStateToProps, mapDispatchToProps)(_Smiley)
