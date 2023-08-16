import React from 'react'
import './navbutton.css'
import menu from "../../img/iconoHamburguesa.png"

export default function NavButton(props) {

  return (
    <i onClick={props.onClick}>
        <img id='hamburguesa' src={menu} alt="" />
    </i>
  )
}
