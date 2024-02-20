import React, { useEffect, useRef, useState } from "react";
import styles from "../Styles/home.module.css";
import logo from "../Images/logo.png";
// import backgroundImage from "../Images/background.png";
const Home = () => {
  const name = "Thilak Singh";
  let id=useRef(null)
  const titleName = "Thakur";
  const developer = "MERN stack web developer";
  const [index, setIndex] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [titleIndex, setTitleIndex] = useState(1);
  const [title, setTitle] = useState("");
  const [designationIndex, setDesignationIndex] = useState(1);
  const [developerType, setDeveloper] = useState("");
  useEffect(() => {
    let text = name.slice(0, index);
    let id
    setFirstName(text);
    if(index<=name.length){
      id = setTimeout(() =>{ console.log(index,'is index');setIndex(index + 1)}, 100);
    }
    return () => {
      clearTimeout(id);
    };
  }, [index]);
  useEffect(() => {
    let text = titleName.slice(0, titleIndex);
    let id
    setTitle(text);
    if(titleIndex<=titleName.length){
       id = setTimeout(() =>{console.log(titleIndex,'is for title');setTitleIndex(titleIndex + 1)}, 100);
    }
    return () => {
      clearTimeout(id);
    };
  }, [titleIndex]);
  useEffect(() => {
    let text = developer.slice(0, designationIndex);
    setDeveloper(text);
    if(designationIndex<=developer.length){
      id.current = setTimeout(() =>{ console.log(designationIndex,'is des');setDesignationIndex(designationIndex + 1)}, 100);
    }
    return () => {
      console.log(id.current,'is useref')
      clearTimeout(id.current);
    };
  }, [designationIndex]);
  return (
    <div
      id="home"
      className={`${styles.navheader} ${styles.header} home-img`}
      style={{ marginBottom: "5%", border: "1px solid #080808" }}
    >
      <div
        id="user-detail-intro"
        className={styles.headerText}
        style={{ border: "0px solid blue" }}
      >
        <p>{developerType}</p>
        <h1 id="user-detail-name">
          Hi, I'm <span>{firstName}</span>
          <br />
          <span>{title}</span>
          <br /> from Hyderabad
        </h1>
      </div>
    </div>
  );
};

export default Home;
