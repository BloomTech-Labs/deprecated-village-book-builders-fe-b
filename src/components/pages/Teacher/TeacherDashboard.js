import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './TeacherDashboard.css';

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
