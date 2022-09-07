import React, { FC, useState, useEffect } from 'react';
import { IUser } from '../components/Users/IUser';
import UserCards from '../components/Users/UserCards';
import https from '../https';


const Users: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);


  useEffect(() => {
    getUsers();
  }, []);


  const getUsers = async () => {
    try {
      const users = await https.get('products');
      setUsers(users.data.products);
    } catch (e) {
      console.log(e);
    }
  };

  return (
      <UserCards users = {users} />
  );
};

export default Users;
