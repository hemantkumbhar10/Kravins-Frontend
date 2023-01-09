import { useState, SyntheticEvent } from "react";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import classes from "./styles/AuthTabs.module.css";

interface tabProps {
  getValue: (num:number) => void;
  swipeValue:number
}

const AuthTabs = (props: tabProps) => {
  const [tabIndex, setTabIndex] = useState(0);

  const { getValue, swipeValue } = props;

  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
    getValue(newValue);
  };

  // console.log(swipeValue);

  return (
    <>
      <Tabs
        variant={"fullWidth"}
        textColor="primary"
        indicatorColor="primary"
        value={(swipeValue ===tabIndex) ? tabIndex : swipeValue}
        onChange={handleChange}
        sx={{
          width: "80%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Tab className={classes.tabs} label={"Login"} />
        <Tab label={"Sign up"} className={classes.tabs} />
      </Tabs>
    </>
  );
};

export default AuthTabs;
