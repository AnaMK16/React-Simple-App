import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();
  return (
    <div>
      <h1>Profile</h1>
      <p>Made By {name || 'Ana'}</p>
    </div>
  );
};

export default Profile;
