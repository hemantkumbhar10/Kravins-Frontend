import { useState, useRef, useEffect } from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Swiper as SwiperType, Navigation} from 'swiper';

import { Box} from "@mui/material";

import classes from "./styles/Auth.module.css";
import logo from "../assets/logo.svg";
import AuthTabs from "../components/AuthTabs";
import Login from "../components/Login";
import HeroAnimation from "../ui/HeroAnimation";
import Signup from "../components/Signup";

import TabPanel from "../helpers/Tabpanel";

import 'swiper/swiper.min.css';


const Auth = () => {
  const [value, setValue] = useState(0);

  const swiperRef = useRef<SwiperType>();

  const getValue = (num:number) =>{
    setValue(num);
  }


  useEffect(() => {

  if(value===0){
    swiperRef.current?.slidePrev();
  }else if(value===1){
    swiperRef.current?.slideNext();
  }

 }, [value])

  return (
    <div className={classes.auth_container}>
      <div className={classes.greet_div}>
      <div className={classes.hero_titles}>
                <h1>Kravin<span>&#8217;</span></h1>
                <h3>CRAVE TOGETHER</h3>
      </div>
        <HeroAnimation />
      </div>
      <div className={classes.auth_div}>
        <div className={classes.logo_div}>
          <div className={classes.logo_bg}>
            <img src={logo} alt="Kravin logo" />
          </div>
          <AuthTabs getValue={getValue} swipeValue={value}/>
        </div>
        <Box>
        <Swiper modules={[Navigation]} onBeforeInit={(swiper)=>{swiperRef.current = swiper}} onRealIndexChange={(swiperCore)=>{setValue(swiperCore.activeIndex)}}> 
          <SwiperSlide >
              <TabPanel value={value} index={0} ><Login/></TabPanel>
          </SwiperSlide>
          <SwiperSlide>
              <TabPanel value={value} index={1}><Signup/></TabPanel>
          </SwiperSlide>
        </Swiper>
        </Box>
      </div>
    </div>
  );
};

export default Auth;
