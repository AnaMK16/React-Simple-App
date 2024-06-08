import React from 'react';
import { useNavigate } from 'react-router-dom';
import SampleImage from '../SampleImage.jpg';

const Home = () => {
  const navigate = useNavigate();

  const goToGallery = () => {
    navigate('/gallery');
  };

  return (
    <div>
      <h1>Home</h1>
      <img src={SampleImage} alt="Hero" />
      <button onClick={goToGallery}>Go To Gallery</button>
    </div>
  );
};

export default Home;


