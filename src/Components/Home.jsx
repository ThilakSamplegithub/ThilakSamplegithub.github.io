import React, { useEffect, useState } from "react";
import styles from "../Styles/home.module.css";
import logo from "../Images/logo.png";
// import backgroundImage from "../Images/background.png";
const Home = () => {
  return (
    <div id="header" className={`${styles.navheader} ${styles.header}`} style={{marginBottom:'5%',border:'1px solid #080808'}}>
      <div className={styles.headerText} style={{border:'0px solid blue'}}>
        <p>MERN stack web developer</p>
        <h1>
          Hi, I'm <span>Thilak Singh</span><br /><span>Thakur</span><br/> from Hyderabad
        </h1>
      </div>
    </div>
  );
};

export default Home;
