import React from "react";
import styles from "../Styles/skills.module.css";
const Skills = () => {
  const skillsData = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      name: "Javascript",
      category: "frontend",
    },
    {
      icon: "https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",
      name: "HTML",
      category: "frontend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/CSS.9f33c557b92e4e2e1cc8.png",
      name: "CSS",
      category: "frontend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/React.20adfb35ae6a6e5817bf.png",
      name: "React",
      category: "frontend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/Redux.5de70b7bc0d2556a0958.png",
      name: "Redux",
      category: "frontend",
    },
    {
      icon: "https://alih6051.github.io/static/media/chakra.15320604467d004df871.png",
      name: "Chakra UI",
      category: "frontend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/Node.js.478c590a266bed215577.png",
      name: "Node JS",
      category: "backend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/Express.39a0f4c3d981885c64f8.png",
      name: "Express",
      category: "backend",
    },
    {
      icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
      name: "MongoDB",
      category: "backend",
    },
    {
      icon: "https://somesh9870.github.io/static/media/mongoose.998152e4bc5fdd366c2c.png",
      name: "Mongoose",
      category: "backend",
    },
    
  ];
  const frontEnd=skillsData.filter(({category})=>category==="frontend")
  const backEnd=skillsData.filter(({category})=>category==="backend")
  return (
    <div id={"skills"}>
      <div className={styles.container}>
        <h1 className="sub_title">Technical Skills</h1>
        <div className={`${styles.services_list}`}>
          <div style={{border:"0px solid orange" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 14 14"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="10" height="10" x="3.5" y=".5" rx="1" />
                <path d="M.5 12.5a1 1 0 0 0 1 1m3 0H6m3 0h1.5M.5 8v1.5m0-6V5" />
              </g>
            </svg>
            <h1  >Front End</h1>
            <div className={styles.frontend}>{frontEnd.map(({icon,name})=>{
              return(
                <div className="skills-card" style={{textAlign:'center'}}>
                  <img  className="skills-card-img" src={icon} alt={name} width={100} />
                  <p className="skills-card-name">{name}</p>
                </div>
              )
            })}</div>
          </div>
          <div>
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 7.5v5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1h4v7Zm-13-4h13m-3.5 4v-7"
              />
            </svg>
            <h1 >Back-End</h1>
            <div className={styles.backend}>{backEnd.map(({icon,name})=>{
              return(
                <div >
                  <img src={icon} alt={name} width={100}/>
                  <p>{name}</p>
                </div>
              )
            })}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
