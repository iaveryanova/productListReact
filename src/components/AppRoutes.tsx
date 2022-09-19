import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../pages/Users'
import Main from '../pages/Main'
import Context from '../context/context'
import User from '../pages/User'
import PersonalData from '../pages/PersonalData'

const AppRoutes = () => {
  const {isLoginUser} = useContext(Context);
  return (
  isLoginUser ?
    <Routes>
        <Route path="users" element={<Users/>}/>
        <Route path='users/:id' element={<User/>}/>
        <Route path="*" element={<Main/>}/>
        <Route path="personalData" element={<PersonalData/>}/>
    </Routes>

    :

    <Routes>
    <Route path="*" element={<Main/>}/>
    </Routes>
  )
  
}

export default AppRoutes