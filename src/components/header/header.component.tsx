import React, { useState, useEffect } from 'react';

import { withRouter, useLocation } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Logo from '../logo/logo.component';
import Tabs from '../tab/tab.component';
// import Drawer from '../drawer/drawer.component';
import { routesNav } from '../../config/config';

import { HeaderComponentWrapper } from './style';
import Logo  from '../../assets/AV.jpg'

const HeaderComponent = ({ match, history }) => {
  const queryStr = `min-width: 769px`;
  const isDesktop = useMediaQuery(`(${queryStr})`);

  const { path } = match;
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let index = 0;
    if (location.pathname === `${path}`) {
      index = 0;
    }
    else if (location.pathname === `${path}about`) {
      index = 1;
    } else if (location.pathname === `${path}projects`) {
      index = 2;
    }
    else if (location.pathname === `${path}contact`) {
      index = 3;
    }
    setValue(index);
  }, [location]);

  const handleChange = (event, index) => {
    history.push(routesNav[index].to);
    setValue(index);
  };

  const onLogoClick = () => {
    history.push(routesNav[0].to);
    setValue(0);
  }

  return (
    <HeaderComponentWrapper>
      {/* <h1 >{"<  />"}</h1> */}
      <img src={Logo} />
      {/* <Logo handleLogoClick={onLogoClick} /> */}
      {isDesktop && <Tabs value={value} handleChange={handleChange} routes={routesNav} />}
      {/* {!isDesktop && <Drawer value={value} handleChange={handleChange} routes={routesNav} />} */}
    </HeaderComponentWrapper>
  );
};

export default withRouter(HeaderComponent);
