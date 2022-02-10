import React from 'react';
import './user-profile.style.css';

import withSubscription from '../../hocs/with-subscription';

const UserProfile = ({ data, name, email }) => (
  <div className='container'>
    <h1>User Profiles</h1>
    <h2>{ name }</h2>
    <h3>{ email }</h3>
    Posts:
    { data.map(post => (
      <div className='post' key={post.id}>
        <h4>{ post.title }</h4>
        <p>{ post.body }</p>
      </div>
    ))}
  </div>
);

export default withSubscription(UserProfile, 'https://jsonplaceholder.typicode.com/posts');
