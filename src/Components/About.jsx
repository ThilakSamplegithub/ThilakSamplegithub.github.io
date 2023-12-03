import React, { useState } from "react";
import styles from "../Styles/about.module.css";
import user from "../Images/user.png";
const About = () => {
  const [display, setDisplay] = useState(false);
  const openTab = (booleanValue) => {
    setDisplay(booleanValue)
  };
  return (
    <div id={"about"}className="about section">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.about_col1}>
            <img src={user} alt="err" />
          </div>
          <div className={styles.about_col2}>
            <h1 className={styles.subTitle}>about me</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div className={styles.tab_titles}>
              <p
                className={`${styles.tab_links} ${display===false&&styles.active_link}`}
                name="skills"
                onClick={(e) => openTab(false)}
              >
                Skills
              </p>
              <p
                className={`${styles.tab_links} ${display&&styles.active_link}`}
                name="education"
                onClick={(e) => openTab(true)}
              >
                Education
              </p>
            </div>
            <div
              className={`${styles.tab_contents} ${display===false&&styles.active_tab} ${styles.skills}`}
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
                <li>
                  <span>App Development</span>
                  <br />
                  Building Android/iOS apps
                </li>
              </ul>
            </div>
            <div className={`${styles.tab_contents} ${display&&styles.active_tab} ${styles.education}`}>
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
