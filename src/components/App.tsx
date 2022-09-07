import React, { useEffect } from 'react';
import Context from '../context/context';
import './App.css';
import AppRoutes from './AppRoutes';
import NavBar from './NavBar';
import { useState } from 'react';
import Modal from './Modal';

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoginUser(true);
    }
  }, [])
  return (
    <Context.Provider value={{openModal, setOpenModal, isLoginUser, setIsLoginUser}}>
    <div className='App container'>
      <NavBar />
      <AppRoutes />
      <Modal />
    </div>
    </Context.Provider>
  );
}

export default App;
