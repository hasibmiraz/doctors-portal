import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Login/Register';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default Routers;
