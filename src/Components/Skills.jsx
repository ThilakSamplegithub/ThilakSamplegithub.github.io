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
      icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png",
      name: "React Native",
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
    {
      icon: "https://cdn-icons-png.flaticon.com/512/860/860142.png",
      name: "Containerization",
      category: "DevOps",
    },
  ];
  const frontEnd = skillsData.filter(({ category }) => category === "frontend");
  const backEnd = skillsData.filter(({ category }) => category === "backend");
  const devops = skillsData.filter(({ category }) => category === "DevOps");
  return (
    <div id={"skills"}>
      <div className={styles.container}>
        <h1 className={styles.sub_title}>echnical Skills</h1>
        <div className={`${styles.services_list}`}>
          <div style={{ border: "0px solid orange" }}>
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
            <h1>Front End</h1>
            <div className={styles.frontend}>
              {frontEnd.map(({ icon, name }) => {
                return (
                  <div className="skills-card" style={{ textAlign: "center" }}>
                    <img
                      className="skills-card-img"
                      src={icon}
                      alt={name}
                      width={100}
                    />
                    <p className="skills-card-name">{name}</p>
                  </div>
                );
              })}
            </div>
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
            <h1>Back-End</h1>
            <div className={styles.backend}>
              {backEnd.map(({ icon, name }) => {
                return (
                  <div className="skills-card">
                    <img
                      className="skills-card-img"
                      src={icon}
                      alt={name}
                      width={100}
                    />
                    <p className="skills-card-name">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {/* This is for devops */}
          <div style={{border:'0px solid red'}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 128 128"
            >
              <defs>
                <linearGradient
                  id="deviconAzuredevops0"
                  x1="9"
                  x2="9"
                  y1="16.97"
                  y2="1.03"
                  gradientTransform="scale(7.11111)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0078d4" />
                  <stop offset=".16" stop-color="#1380da" />
                  <stop offset=".53" stop-color="#3c91e5" />
                  <stop offset=".82" stop-color="#559cec" />
                  <stop offset="1" stop-color="#5ea0ef" />
                </linearGradient>
              </defs>
              <path
                fill="url(#deviconAzuredevops0)"
                d="M120.89 28.445v69.262l-28.445 23.324l-44.09-16.07v15.93L23.395 88.25l72.746 5.688V31.574ZM96.64 31.93L55.82 7.11v16.285L18.348 34.418L7.109 48.852v32.785l16.075 7.11V46.718Zm0 0"
              />
            </svg>
            <h1>DevOps</h1>
            {devops?.map((el) => (
              <div style={{display:"flex",flexWrap:'wrap',justifyContent:"center",margin:'auto'}}>
                <div>
                  <img
                    width={100}
                    height={100}
                    src={el.icon}
                  />
                  <p>{el.name}</p>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="100"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#3a4d54"
                      fill-rule="evenodd"
                      d="M20 96.9v-8.1c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.9 1.8 1.9v17c0 4.1-2 7.4-5.6 9.5q-2.55 1.5-5.4 1.5h-.8c-4.1 0-7.4-2-9.5-5.6q-1.5-2.55-1.5-5.4v-.8c0-4.1 2-7.4 5.6-9.5Q9.25 94 12.1 94h.8c2.7.1 5.1 1.1 7.1 2.9m-15.1 8.5c0 3 1.5 5.2 4.1 6.7c1.1.6 2.2.9 3.4.9c2.9 0 5.1-1.4 6.6-3.9c.7-1.2 1-2.4 1-3.8c0-2.6-1.2-4.6-3.3-6.1c-1.3-.9-2.7-1.4-4.2-1.4c-3.2 0-5.5 1.6-6.9 4.5c-.5 1-.7 2.1-.7 3.1m32.2-11.3h.5c4.4 0 7.8 2.1 9.9 6c.9 1.5 1.3 3.2 1.3 5v.8c0 4.1-2 7.4-5.6 9.5q-2.55 1.5-5.4 1.5H37c-4.1 0-7.4-2-9.5-5.6q-1.5-2.55-1.5-5.4v-.8c0-4.1 2.1-7.4 5.6-9.5c1.7-1.1 3.6-1.5 5.5-1.5m-7.2 11.3c0 2.9 1.4 5 3.9 6.5c1.2.7 2.4 1 3.8 1c2.9 0 5-1.5 6.5-3.9c.7-1.2 1-2.4 1-3.8c0-2.7-1.3-4.8-3.5-6.3c-1.2-.8-2.6-1.2-4-1.2c-3.2 0-5.5 1.6-6.9 4.5c-.6 1.1-.8 2.2-.8 3.2m34.8-7.2c-.6-.3-1.7-.4-2.3-.4c-3.2-.1-5.5 1.7-6.9 4.5c-.5 1-.7 2-.7 3.1c0 3.3 1.7 5.6 4.6 7c1.1.5 2.4.6 3.6.6c1 0 2.5-.6 3.4-1.1l.2-.1h.8c.9.2 1.5.7 1.5 1.7v.4c0 2.3-4.3 2.9-5.9 3c-5.7.4-10-2.7-11.6-8.2c-.3-.9-.4-1.9-.4-2.9v-.8c0-4.1 2.1-7.4 5.6-9.5Q59.15 94 62 94h.8c2 0 3.9.6 5.6 1.7l.1.1l.1.1c.2.3.3.6.3 1v.4c0 1-.7 1.5-1.6 1.7H67c-.5 0-1.8-.6-2.3-.8m12.4 2.6c1.5-1.5 3-3 4.5-4.4c.4-.4 2-2.1 2.6-2.1h.8c.9.2 1.5.7 1.5 1.7v.4c0 .6-.7 1.4-1.2 1.8l-2.7 2.7l-4.6 4.7c2 2 4 4 5.9 6l1.6 1.7c.2.2.5.4.6.7q.3.45.3.9v.5c-.2.9-.8 1.6-1.7 1.6h-.3c-.6 0-1.3-.7-1.8-1.1c-.9-.8-1.8-1.7-2.6-2.6l-2.9-2.9v4.6c0 1.1-.7 1.9-1.8 1.9H75c-1.1 0-1.8-.9-1.8-1.9V88.9c0-1.1.7-1.9 1.8-1.9h.3c1.1 0 1.8.8 1.8 1.9zm47.6-6.6h.4c1.1 0 1.9.8 1.9 1.9c0 1.6-1.5 2-2.8 2c-1.7 0-3.4 1-4.5 2.2c-1.5 1.5-2.1 3.3-2.1 5.4v9.2c0 1.1-.7 1.9-1.8 1.9h-.3c-1.1 0-1.8-.9-1.8-1.9v-9.8c0-3.8 1.8-6.8 4.9-9c1.8-1.2 3.9-1.9 6.1-1.9m-27.1 18.3c1.4.5 3 .4 4.4.2c.7-.3 2.6-1.1 3.3-1h.2c.4.2.8.5 1 .9c.5 1 .3 2-.7 2.6l-.3.2c-3.6 2.1-7.5 1.8-11.1-.2c-1.7-.9-3-2.3-4-4l-.2-.4c-2.3-4-2-8.3.6-12.1c.9-1.3 2.1-2.3 3.5-3.1l.5-.3c3.4-2 7.1-1.8 10.6-.1c1.9.9 3.4 2.3 4.5 4.1l.2.3c.8 1.3-.2 2.5-1.2 3.3c-1.2.9-2.4 2-3.5 3q-4.05 3.3-7.8 6.6m-3.3-2.3l8.5-7.3c1-.8 2-1.7 3-2.6c-.8-1-2.1-1.7-3.1-2.1c-2.2-.8-4.4-.6-6.4.6c-2.6 1.5-3.8 4-3.7 7c0 1.2.4 2.3 1 3.4c.2.4.4.7.7 1M73.7 33.7H85v11.5h5.7c2.6 0 5.3-.5 7.8-1.3c1.2-.4 2.6-1 3.8-1.7c-1.6-2.1-2.4-4.7-2.6-7.3c-.3-3.5.4-8.1 2.8-10.8l1.2-1.4l1.4 1.1c3.6 2.9 6.5 6.8 7.1 11.4c4.3-1.3 9.3-1 13.1 1.2l1.5.9l-.8 1.6c-3.2 6.2-9.9 8.2-16.4 7.8c-9.8 24.3-31 35.8-56.8 35.8c-13.3 0-25.5-5-32.5-16.8l-.1-.2l-1-2.1c-2.4-5.2-3.1-10.9-2.6-16.6l.2-1.7h9.6V33.7h11.3V22.4h22.5V11.1h13.5z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#00aada"
                      d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7c-3.1 3.6-3.6 13.2 1.3 17.2c-2.8 2.4-8.5 4.7-14.5 4.7H18.4c-.6 6.2.5 11.9 3 16.8l.8 1.5c.5.9 1.1 1.7 1.7 2.6c3 .2 5.7.3 8.2.2c4.9-.1 8.9-.7 12-1.7c.5-.2.9.1 1.1.5c.2.5-.1.9-.5 1.1c-.4.1-.8.3-1.3.4c-2.4.7-5 1.1-8.3 1.3h-.6c-1.3.1-2.7.1-4.2.1c-1.6 0-3.1 0-4.9-.1c6 6.8 15.4 10.8 27.2 10.8c25 0 46.2-11.1 55.5-35.9c6.7.7 13.1-1 16-6.7c-4.5-2.6-10.5-1.8-13.9-.1"
                    />
                    <path
                      fill="#28b8eb"
                      d="M110.2 37.9c.8-5.9-3.6-10.5-6.4-12.7c-3.1 3.6-3.6 13.2 1.3 17.2c-2.8 2.4-8.5 4.7-14.5 4.7h-68c-.3 9.5 3.2 16.7 9.5 21c4.9-.1 8.9-.7 12-1.7c.5-.2.9.1 1.1.5c.2.5-.1.9-.5 1.1c-.4.1-.8.3-1.3.4c-2.4.7-5.2 1.2-8.5 1.4l-.1-.1c8.5 4.4 20.8 4.3 35-1.1c15.8-6.1 30.6-17.7 40.9-30.9c-.2.1-.3.2-.5.2"
                    />
                    <path
                      fill="#028bb8"
                      d="M18.5 54.6c.4 3.3 1.4 6.4 2.9 9.3l.8 1.5c.5.9 1.1 1.7 1.7 2.6c3 .2 5.7.3 8.2.2c4.9-.1 8.9-.7 12-1.7c.5-.2.9.1 1.1.5c.2.5-.1.9-.5 1.1c-.4.1-.8.3-1.3.4c-2.4.7-5.2 1.2-8.5 1.4h-.4c-1.3.1-2.7.1-4.1.1c-1.6 0-3.2 0-4.9-.1c6 6.8 15.5 10.8 27.3 10.8c21.4 0 40-8.1 50.8-26H18.5z"
                    />
                    <path
                      fill="#019bc6"
                      d="M23.3 54.6c1.3 5.8 4.3 10.4 8.8 13.5c4.9-.1 8.9-.7 12-1.7c.5-.2.9.1 1.1.5c.2.5-.1.9-.5 1.1c-.4.1-.8.3-1.3.4c-2.4.7-5.2 1.2-8.6 1.4c8.5 4.4 20.8 4.3 34.9-1.1c8.5-3.3 16.8-8.2 24.2-14.1z"
                    />
                    <path
                      fill="#00acd3"
                      fill-rule="evenodd"
                      d="M28.2 35.5H38v9.8h-9.8zm.8.9h.8v8.1H29zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1H32zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm3.1-12.1h9.8V34h-9.8zm.8.8h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#23c2ee"
                      fill-rule="evenodd"
                      d="M39.5 35.5h9.8v9.8h-9.8zm.8.9h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#00acd3"
                      fill-rule="evenodd"
                      d="M50.8 35.5h9.8v9.8h-9.8zm.8.9h.8v8.1h-.8zm1.4 0h.8v8.1H53zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1H56zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#23c2ee"
                      fill-rule="evenodd"
                      d="M50.8 24.3h9.8V34h-9.8zm.8.8h.8v8.1h-.8zm1.4 0h.8v8.1H53zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1H56zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zM62 35.5h9.8v9.8H62zm.9.9h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#00acd3"
                      fill-rule="evenodd"
                      d="M62 24.3h9.8V34H62zm.9.8h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#23c2ee"
                      fill-rule="evenodd"
                      d="M62 13h9.8v9.8H62zm.9.8h.8V22h-.8zm1.4 0h.8V22h-.8zm1.5 0h.8V22h-.8zm1.5 0h.8V22h-.8zm1.4 0h.8V22h-.8zm1.5 0h.8V22h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#00acd3"
                      fill-rule="evenodd"
                      d="M73.3 35.5h9.8v9.8h-9.8zm.8.9h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.5 0h.8v8.1h-.8zm1.4 0h.8v8.1h-.8zm1.5 0h.8v8.1H80zm1.5 0h.8v8.1h-.8z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#d4eef1"
                      fill-rule="evenodd"
                      d="M48.6 61.2c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7c.1-1.5 1.3-2.7 2.7-2.7"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#3a4d54"
                      fill-rule="evenodd"
                      d="M48.6 61.9c.2 0 .5 0 .7.1c-.2.1-.4.4-.4.7c0 .4.4.8.8.8c.3 0 .6-.2.7-.4c.1.2.1.5.1.7c0 1.1-.9 1.9-1.9 1.9c-1.1 0-1.9-.9-1.9-1.9s.9-1.9 1.9-1.9M1 55.6h125.3c-2.7-.7-8.6-1.6-7.7-5.2c-5 5.7-16.9 4-20 1.2c-3.4 4.9-23 3-24.3-.8c-4.2 5-17.3 5-21.5 0c-1.4 3.8-21 5.7-24.3.8c-3 2.8-15 4.5-20-1.2c1.1 3.5-4.8 4.5-7.5 5.2"
                      clip-rule="evenodd"
                    />
                    <path
                      fill="#bfdbe0"
                      d="M55.8 80.6c-6.7-3.2-10.3-7.5-12.4-12.2c-2.5.7-5.5 1.2-8.9 1.4c-1.3.1-2.7.1-4.1.1c-1.7 0-3.4 0-5.2-.1c6.1 6.1 13.7 10.8 27.6 10.9c1-.1 2-.1 3-.1"
                    />
                    <path
                      fill="#d4eef1"
                      d="M45.9 72.7c-.9-1.3-1.8-2.8-2.5-4.3c-2.5.7-5.5 1.2-8.9 1.4c2.4 1.3 5.8 2.5 11.4 2.9"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
