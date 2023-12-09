import React, { useState } from "react";
import styles from "../Styles/about.module.css";
import user from "../Images/user.png";
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
            <h1 className={styles.subTitle}>about me</h1>
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
                  Designing Web/App interface
                </li>
                <li>
                  <span>Web Development</span>
                  <br />
                  Web app Development
                </li>
                {/* <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS apps
                </li> */}
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
                  MERN stack development online traning at Masai School
                </li>
                <li>
                  <span>2017</span>
                  <br />
                  ECE from Geethanjali College of Engineering and Technology
                  Hyderabad
                </li>
                {/* <li><span></span><br/>Building Android/iOS apps</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
