
import { useState, useEffect } from 'react'
import "./Profile.css"

import { useSelector } from 'react-redux'
import { userData } from '../userSlice'

import { useNavigate } from 'react-router-dom'

export const Profile = () => {

    //Instancio RDX en modo LECTURA
    const rdxUserData = useSelector(userData)

    const navigate = useNavigate()

    useEffect(()=>{
        if(!rdxUserData.credentials.token){
          navigate("/")
        }
      }, [rdxUserData])

    return (
        <div>soy el perfil</div>
    )
}