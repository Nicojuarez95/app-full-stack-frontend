import React from 'react'
import "./login.css"
import {Link as Anchor} from 'react-router-dom'

export default function Login() {
  return (
    <div className='cont'>
      INICIAR SESION
      <form >
          <input type="email"  placeholder=' Email'/>

          <input type="password"  
          placeholder=' Constraseña'/>

          <button type='submit'>
              ENTRAR
          </button>
          <Anchor to="/register">No tengo tengo cuenta</Anchor>
      </form>
    </div>
  )
}
