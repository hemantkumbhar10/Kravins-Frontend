import Comments from "../components/Homecomponents/Comments";
import HomeTabs from "../components/HomeTabs";
import RecipePage from "../Subpages/RecipePage";

import { Routes, Route, Outlet } from "react-router-dom";



const Kravin = () => {
    return (
      <>
       
        <HomeTabs />
          <Outlet />
          {/* <RecipePage/> */}
          {/* <Comments /> */}
      </>
    );
  };


export default Kravin;