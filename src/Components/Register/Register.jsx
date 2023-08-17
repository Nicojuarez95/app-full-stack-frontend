import React from 'react'
import { useForm } from 'react-hook-form'
import "./register.css"
import {Link as Anchor } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"


export default function Register() {
    const {register, handleSubmit} = useForm()
    const {signup, user} = useAuth()
    const navigate = useNavigate();
    
    const onSubmit= handleSubmit(async (values) => {
        signup(values)
        navigate("/login");
    })

  return (
    <div className='cont'>
        REGISTRO
        <form onSubmit={onSubmit}>
            
            <input type="text" {...register("username",{required: true})} placeholder=' Nombre de usuario'/>

            <input type="email" {...register("email",{required: true})} placeholder=' Email'/>

            <input type="password" {...register("password",{required: true})} 
            placeholder=' Constraseña'/>

            <button type='submit'>
                REGISTRAR
            </button>
            <Anchor to="/login">Ya tengo cuenta</Anchor>
        </form>

    </div>
  )
}
