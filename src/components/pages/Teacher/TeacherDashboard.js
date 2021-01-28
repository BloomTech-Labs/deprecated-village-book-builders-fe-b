import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './TeacherDashboard.css';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import {
  menuButton,
  menuIcon,
  menuMove,
  Dashboard,
} from './TeacherDashboard.style';
import Logout from '../../Logout.js';

const TeacherDashboard = () => {
  const { userId } = useSelector(state => state.authReducer);

  return (
    <>
      <h2>Hello, Teacher!!!</h2>
      <div className="teacher__dashboard__navbar">
        {/* subtracting userId from 10 just for temporary purpose */}
        <NavLink to={`/teacher/${userId - 10}`}>
          <button className="btn l2-btn menuLinks">Profile</button>
        </NavLink>
        <NavLink to="/logout">
          <button className="btn l2-btn menuLinks">Logout</button>
        </NavLink>
      </div>
    </>
  );
};

export default TeacherDashboard;
