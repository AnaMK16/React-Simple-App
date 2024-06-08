import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Profile from './pages/Profile';
import ErrorPage from './pages/ErrorPage';

const App = () => (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/profile/:name" element={<Profile />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;

