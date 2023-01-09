import React, { useState, SyntheticEvent } from "react";
import { Tab, Tabs } from "@mui/material";

import classes from "./styles/HomeTabs.module.css";

import { NavLink } from "react-router-dom";

const MyNavLink = React.forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ""}`
    }
    end
  >
    {props.children}
  </NavLink>
));

const HomeTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  // const element : HTMLElement | null = document.querySelector('.MuiButtonBase-root');

  // if(element){
  //   element.style.display= 'none';
  // }

  return (
    <div className={classes.tabs_container} style={{ zIndex: 88888 }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        aria-label="scrollable prevent tabs"
        
      >
        <Tab
          className={classes.tab}
          label="Recipes"
          component={MyNavLink}
          to=""
          activeClassName={classes.active_tab}
          end
        />
        <Tab
          className={classes.tab}
          label="Cocktails"
          component={MyNavLink}
          to="cocktails"
          activeClassName={classes.active_tab}
        />
        <Tab
          className={classes.tab}
          label="Nutrients"
          component={MyNavLink}
          to="nutrients"
          activeClassName={classes.active_tab}
        />
        <Tab className={classes.tab} label="Fun zone" component={MyNavLink}
          to="kravinsextra"
          activeClassName={classes.active_tab}/>
      </Tabs>
    </div>
  );
};

export default HomeTabs;
