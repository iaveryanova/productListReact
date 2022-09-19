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
      <h3>Information about product {user.title}</h3>
      <div>Category: {user.category}</div>
      <div>Description: {user.description}</div>
      <div>Price: {user.price}</div>
      <div>Discount Percentage: {user.discountPercentage}</div>
      <div>Rating: {user.rating}</div>
      <div>Stock: {user.stock}</div>
      <div>Brand: {user.brand}</div>
      <div>Category: {user.category}</div>
      <div>Thumbnail: {user.thumbnail}</div>
      <img src={user.images[0]}/>
    </div>
  );
};

export default User;
