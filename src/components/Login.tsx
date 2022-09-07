import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import http from '../http';
import { useContext } from 'react';
import Context from '../context/context';

const Login = () => {
  const { setOpenModal, setIsLoginUser} = useContext(Context);
  const path = useLocation();
  const isLogin = path.pathname === '/login';
  const [login, setLogin] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');
  const authorization = async () => {
    const data = { email: login, password: password };
    const authorizationData = await http.post(
      `https://reqres.in/api/${isLogin ? 'login' : 'registration'}`, data);
    // console.log(authorizationData);
    if (authorizationData.data?.token) {
      localStorage.setItem('token', authorizationData.data.token);
      setIsLoginUser(true);
      setOpenModal(false);
    }
    if (authorizationData.data?.token) {
      alert('Congratulation, you are awesome!');
      setLogin('');
      setPassword('');
    }
  };
  return (
    <div className='row'>
      <input
        className='form-control mb-3'
        placeholder='Input value'
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        className='form-control mb-3'
        placeholder='Input password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <Link to={isLogin ? 'registration' : 'login'}>
        {isLogin
          ? 'Do not have a account? Registration!'
          : 'Have a account? Login'}
      </Link>
      <div className='align-items-center'>
        <button
          className='btn btn-primary col-3 m-3'
          onClick={() => authorization()}
        >
          {isLogin ? 'Login' : 'Registration'}
        </button>
      </div>
    </div>
  );
};

export default Login;
