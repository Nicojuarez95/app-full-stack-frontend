import React from 'react'
import './navindex.css'
import {Link as Anchor} from 'react-router-dom'
import photo from "../../img/descarga.png"
import menu from "../../img/iconoHamburguesa.png"

export default function NavIndex({ handleRender }) {

    return (
        <nav>
            <div className='perfil'>
                <div className='perfil1'>
                    <img id="imagen-nav" src={photo} alt="imagen-perfil" />

                    <div className='text-nav'>
                        <h4>Nombre</h4>
                        <p>Email</p>
                    </div>
                </div>
                   
                <img className='equis' src={menu} alt="" onClick={handleRender}/>  
            </div>

            <div className='ancors-nav'>
                <Anchor to="/">Inicio</Anchor>
                <Anchor to="/perfil">Perfil</Anchor>
            </div>
        </nav>
    )
}
