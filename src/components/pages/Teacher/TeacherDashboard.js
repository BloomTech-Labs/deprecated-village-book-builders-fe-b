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
import TeacherProfile from './TeacherProfile/TeacherProfile';
import TeacherProfileForm from './TeacherProfile/TeacherProfileForm';
import Logout from '../../Logout.js';
import { ReactComponent as Welcome } from '../../../assets/images/Welcome-Image.svg';

const TeacherDashboard = () => {
  const { userId } = useSelector(state => state.authReducer);
  const [visible, setVisible] = useState(true);
  const [desktop, setDesktop] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
    }
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  // Todo: this needs to be converted to a mediaquery and removed from here
  window.addEventListener('resize', () => {
    if (window.innerWidth <= 800 || document.documentElement.width <= 800) {
      setDesktop(false);
      setVisible(false);
    } else {
      setDesktop(true);
      setVisible(true);
    }
  });

  return (
    <div>
      <Dashboard>
        <Switch>
          <Route exact path="/teacher" component={TeacherProfile} />
          <Route path="/teacher/edit/:id" component={TeacherProfileForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/" render={() => <Welcome />} />
        </Switch>
      </Dashboard>

      {desktop ? null : (
        // inline style to force animation
        <div style={visible ? menuMove : menuIcon}>
          <Button
            type="primary"
            style={menuButton} // inline style to override Ant Design
            onClick={() => setVisible(!visible)}
            icon={<MenuOutlined />}
          >
            Menu
          </Button>
        </div>
      )}
      <div>
        <Drawer
          placement={desktop ? 'left' : 'bottom'}
          closable={false}
          onClose={onClose}
          visible={visible}
          mask={false}
          width={desktop ? 300 : 500}
          height={500}
        >
          <h2>Hello, Teacher!!!</h2>

          <div className="teacher__dashboard__navbar">
            {/* subtracting userId from 10 just for temporary purpose */}
            <NavLink
              to={`/teacher/${userId - 10}`}
              onClick={() => setVisible(true)}
            >
              <button className="btn l2-btn menuLinks">Profile</button>
            </NavLink>
            <Link to="/logout" onClick={() => setVisible(true)}>
              <button className="btn l2-btn menuLinks">Logout</button>
            </Link>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default TeacherDashboard;
