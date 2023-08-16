import React from "react";
import NavButton from "../NavButton/NavButton";
import NavIndex from '../NavIndex/NavIndex'
import { useState } from "react";
import "./header.css";
import logo from "../../img/logoChat.png"

export default function Header() {

  const [render, setRender] = useState(false)

  const handleRender = () =>{
    setRender(!render)
  }

  return (
    <header>
        <NavButton onClick={handleRender}/>
        {render && <NavIndex handleRender={handleRender}/>}
        <img className="logo" src={logo} alt="Logo" />
    </header>
  )
}
