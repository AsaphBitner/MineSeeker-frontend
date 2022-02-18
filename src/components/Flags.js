import React, { useState } from "react";
import {useEffect} from 'react'
import { useSelector } from "react-redux";
import { changeTime } from "../store/actions";
import { connect } from "react-redux";


function _Flags(props) {
    // let state = useSelector(state => state)
    let flags = useSelector(state => state.numOfFlags)

    return (
        <div className="game-flags">
            🚩{flags}
        </div>
    )
}

const mapStateToProps = state => {
    return {...state}
}
  const mapDispatchToProps = {
    changeTime,
  }

  export const Flags = connect(mapStateToProps, mapDispatchToProps)(_Flags)

