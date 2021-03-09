import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { ThemeContext } from 'styled-components';
import { TabTheme } from './style';

export default function TabNav({ value, handleChange, routes }: any) {
  const themeContext = useContext(ThemeContext);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor:  themeContext.black,
    },
    tabsIndicator: {
      backgroundColor: '#f00',
      display: 'none',
    },
    tab: {
      '&:hover': {
        color: themeContext.black,
        opacity: 1,
      },
    },
  }));
  const classes = useStyles();

  return (
    <TabTheme>
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Header Navbar"
            classes={{ indicator: classes.tabsIndicator }}
          >
            {routes.map((route, index) => (
              <Tab
                label={route.label}
                value={index}
                classes={{ root: classes.tab }}
                key={route.label}
              />
            ))}
          </Tabs>
        </AppBar>
      </div>
    </TabTheme>
  );
}
