import React, { useEffect, useState } from "react";
import styles from "../Styles/home.module.css";
import logo from "../Images/logo.png";
// import backgroundImage from "../Images/background.png";
const Home = () => {
  return (
    <div id="home" className={`${styles.navheader} ${styles.header} home-img`} style={{marginBottom:'5%',border:'1px solid #080808'}}>
      <div id="user-detail-intro" className={styles.headerText} style={{border:'0px solid blue'}}>
        <p>MERN stack web developer</p>
        <h1 id="user-detail-name">
          Hi, I'm <span>Thilak Singh</span><br /><span>Thakur</span><br/> from Hyderabad
        </h1>
      </div>
    </div>
  );
};

export default Home;
