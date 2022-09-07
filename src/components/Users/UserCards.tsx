import React from 'react';
import Loader from '../Loader';
import { IUser } from './IUser';
import { Link } from 'react-router-dom';

const UserCards = ({ users }: { users: IUser[] }) => {
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
      {users.length ? (
        users.map((user) => (
          <div className='col' key={user.id}>
            <div className='card h-100'>
              <div className='card-body'>
                {/* <h5 className='card-title'>{`№${user.id} - ${user.title}`}</h5> */}
                <h5 className='card-title'>
                  <Link to={`/users/${user.id}`}>{user.title}</Link>
                </h5>
                <p className='card-text'>Description: {user.description}</p>
                <p className='card-text'>Price: {user.price}</p>
                <p className='card-text'>Brand: {user.brand}</p>
                <p className='card-text'>Category: {user.category}</p>
                <img src={user.images[0]} style={{ width: '100px' }} />
              </div>
              <div className='card-footer'></div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default UserCards;
