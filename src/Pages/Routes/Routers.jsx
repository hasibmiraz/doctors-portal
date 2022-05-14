import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../About/About';
import Appointment from '../Appointment/Appointment';
import Dashboard from '../Dashboard/Dashboard';
import MyAppointments from '../Dashboard/MyAppointments';
import MyReview from '../Dashboard/MyReview';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Register from '../Login/Register';
import RequireAuth from '../Login/RequireAuth';
import ResetPassword from '../Login/ResetPassword';

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments />} />
          <Route path="review" element={<MyReview />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Routers;
