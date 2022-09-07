import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import https from '../https';
import { initialUser } from '../components/Users/initialUser';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(initialUser);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const user = await https.get(`products/${id}`);
    console.log(user.data);
    setUser(user.data);
  };
  console.log(id);
  return (
    <div>
      <h1>Information about product {id}</h1>
      <div>{user.title}</div>
      <div>{user.category}</div>
      <div>{user.description}</div>
      <img src={user.images[0]}/>
    </div>
  );
};

export default User;
