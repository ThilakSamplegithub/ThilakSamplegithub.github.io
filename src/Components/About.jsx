import React, { useState } from "react";
import styles from "../Styles/about.module.css";
import user from "../Images/user2.png";
// import resume in images folder
const About = () => {
  const [display, setDisplay] = useState(false);
  const openTab = (booleanValue) => {
    setDisplay(booleanValue);
  };
  return (
    <div id={"about"} className="about section">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.about_col1}>
            <img src={user} alt="err" />
          </div>
          <div className={styles.about_col2}>
            <h1 className={styles.subTitle}>bout me</h1>
            <p>
              A Results-driven MERN stack developer with a passion for building
              engaging and scalable web applications. As a dynamic problem
              solver, brings creativity and a user-centric approach to every
              project. With expertise in both front-end and back-end
              technologies, thrives in collaborative environments and
              continuously seek opportunities to expand  skill set.
            </p>
            <div className={styles.tab_titles}>
              <p
                className={`${styles.tab_links} ${
                  display === false && styles.active_link
                }`}
                name="skills"
                onClick={(e) => openTab(false)}
              >
                Skills
              </p>
              <p
                className={`${styles.tab_links} ${
                  display && styles.active_link
                }`}
                name="education"
                onClick={(e) => openTab(true)}
              >
                Education
              </p>
            </div>
            <div
              className={`${styles.tab_contents} ${
                display === false && styles.active_tab
              } ${styles.skills}`}
            >
              <ul>
                <li>
                  <span>UI?UX</span>
                  <br />
                  Designing Web interface
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web Development
                </li>
              </ul>
            </div>
            <div
              className={`${styles.tab_contents} ${
                display && styles.active_tab
              } ${styles.education}`}
            >
              <ul>
                <li>
                  <span>2023</span>
                  <br />
                  Full Stack Web Development from Masai School,Bangalore
                </li>
                <li>
                  <span>2022</span>
                  <br />
                  UPSC preparation from Chanakya IAS Academy, Delhi
                </li>
                <li>
                  <span>2016</span>
                  <br />
                  ECE from Geethanjali College of Engineering and Technology
                  Hyderabad
                </li>
              </ul>
            </div>
            <a
              id="resume-link-2"
              // href={resume}
              download={"place resume from system"}
              className={`${styles.btn} ${styles.btn2} nav-link resume`}
            >
              <button
                style={{
                  fontSize: "18px",
                  backgroundColor: "rgb(255,0,79)",
                  border: "1px solid rgb(255,0,79)",
                  color: "white",
                }}
                id="resume-button-2"
                onClick={() =>console.log('onclick window opens new tab')
                  // window.open(
                  //   "paste resume link"
                  // )
                }
              >
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
