
import { Routes, Route, Navigate } from 'react-router-dom'
import { Home } from '../Home/Home'
import { Login } from '../Login/Login'
import { Register } from '../Register/Register'
import { Profile } from '../Profile/Profile'
import { Characters } from '../Characters/Characters'
import { Dates } from '../Dates/Dates'
export const Body = () => {

    return (
        <>
            <Routes>
                <Route path="*" element={<Navigate to="/"/>}/>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/characters" element={<Characters />}/>
                <Route path="/dates" element={<Dates />}/>
            </Routes>
        </>
    )
}