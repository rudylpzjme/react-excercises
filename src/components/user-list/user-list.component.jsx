import React from 'react';

import withSubscription from '../../hocs/with-subscription';

const UserList = ({ data }) => (
  <div className='container'>
    <header><h1>User List</h1></header>
    { data.map(user => (
      <div className='user'>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    ))}
  </div>
);

export default withSubscription(UserList, 'https://jsonplaceholder.typicode.com/users');
