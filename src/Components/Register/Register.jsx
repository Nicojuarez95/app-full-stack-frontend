import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import "./register.css"
import {Link as Anchor } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useAuth } from "../../context/AuthContext"

export default function Register() {
    const {register, handleSubmit, formState:{errors}} = useForm()
    const {signup, isAuthenticated, errors: registerErrors} = useAuth()
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAuthenticated)
            navigate("/login")
    },[isAuthenticated])
    
    const onSubmit= handleSubmit(async (values) => {
        signup(values)
    })

  return (
    <div className='cont'>
            REGISTRO
            {
                registerErrors?.map((error, i)=>(
                    <div key={i}>
                        {error}
                    </div>
                ))
            }
        <form onSubmit={onSubmit}>
            <input type="text" {...register("username",{required: true})} placeholder=' Nombre de usuario'/>
                {
                    errors.username && (<p className='textForm'>Nombre de usuario requerido</p>)
                }
            <input type="email" {...register("email",{required: true})} placeholder=' Email'/>
                {
                    errors.email && (<p className='textForm'>Email requerido</p>)
                }
            <input type="password" {...register("password",{required: true})} 
            placeholder=' Constraseña'/>
                {
                    errors.password && (<p className='textForm'>Contraseña requerida</p>)
                }
            <button type='submit'>
                REGISTRAR
            </button>
            <Anchor to="/login">Ya tengo cuenta</Anchor>
        </form>
    </div>
  )
}
