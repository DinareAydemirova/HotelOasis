import React, { useContext, useEffect, useState } from "react";
import style from "./Profile.module.scss";
import axios from "axios";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { useParams } from "react-router-dom";

const { TapPane } = Tabs;

const Profile = () => {
  
    
  return (
    <div className={style.profile}>
        <div className={style.container}>
      <Tabs>
        <TabPane tab="Profile" key="2">
          <h1>My Profile</h1>
          <div className={style.box}>
            <h4>Name: </h4>
          </div>
        </TabPane>
        <TabPane tab="Bookings" key="1 ">
          <h1><MyBookings/></h1>
        </TabPane>
      </Tabs>
      </div>
    </div>
  );
};

export default Profile;


export function MyBookings(){
    return(
      <h1>My Bookings</h1>
    )
}
