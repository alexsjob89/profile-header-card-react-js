import React from 'react'
import {AiOutlineInfoCircle} from "react-icons/ai"

function InfoCircle({content}) {
  return (
    <div
    className="info-icon"
    style={{
     position: "relative",
     marginLeft: "15rem",
     marginBottom: "-2.4rem",
     width: "fit-content"}}>

     <AiOutlineInfoCircle arial-hidden="true" color="blue"/>

     <div className="info-content">
     <p style={{ color: "black", display: "block"}}>This is some info content about organizations</p></div>
    </div>
  )
}

export default InfoCircle