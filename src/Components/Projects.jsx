import React from "react";
import styles from "../Styles/portfolio.module.css";
import work1 from "../Images/work-1.png";
import work2 from "../Images/work-2.png";
import work3 from "../Images/work-3.png";
const Projects = () => {
  return (
    <div id={"projects"}>
      <div className={styles.container}>
        <h1 className={styles.subTitle}>My Work</h1>
        <div className={styles.work_list}>
          <div className={styles.work}>
            <img src={work1} />
            <div className={styles.layer}>
              <h3>Social Media App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <g fill="#ff004f">
                    <path
                      d="m209.94 113.94l-28 28a47.76 47.76 0 0 1-26.52 13.48a47.76 47.76 0 0 1-13.48 26.52l-28 28a48 48 0 0 1-67.88-67.88l28-28a47.76 47.76 0 0 1 26.52-13.48a47.76 47.76 0 0 1 13.48-26.52l28-28a48 48 0 0 1 67.88 67.88Z"
                      opacity=".2"
                    />
                    <path d="M137.54 186.36a8 8 0 0 1 0 11.31l-17.94 18a56 56 0 0 1-79.22-79.27l28.12-28.11a56 56 0 0 1 76.81-2.29a8 8 0 1 1-10.64 12a40 40 0 0 0-54.85 1.63L51.7 147.72a40 40 0 1 0 56.58 56.58l17.94-17.94a8 8 0 0 1 11.32 0Zm78.08-146a56.08 56.08 0 0 0-79.22 0l-17.94 17.97a8 8 0 0 0 11.32 11.31l17.94-17.94a40 40 0 0 1 56.58 56.58l-28.12 28.12a40 40 0 0 1-54.85 1.6a8 8 0 1 0-10.64 12a56 56 0 0 0 76.81-2.27l28.12-28.11a56.08 56.08 0 0 0 0-79.24Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.work}>
            <img src={work2} />
            <div className={styles.layer}>
              <h3>Music App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <g fill="#ff004f">
                    <path
                      d="m209.94 113.94l-28 28a47.76 47.76 0 0 1-26.52 13.48a47.76 47.76 0 0 1-13.48 26.52l-28 28a48 48 0 0 1-67.88-67.88l28-28a47.76 47.76 0 0 1 26.52-13.48a47.76 47.76 0 0 1 13.48-26.52l28-28a48 48 0 0 1 67.88 67.88Z"
                      opacity=".2"
                    />
                    <path d="M137.54 186.36a8 8 0 0 1 0 11.31l-17.94 18a56 56 0 0 1-79.22-79.27l28.12-28.11a56 56 0 0 1 76.81-2.29a8 8 0 1 1-10.64 12a40 40 0 0 0-54.85 1.63L51.7 147.72a40 40 0 1 0 56.58 56.58l17.94-17.94a8 8 0 0 1 11.32 0Zm78.08-146a56.08 56.08 0 0 0-79.22 0l-17.94 17.97a8 8 0 0 0 11.32 11.31l17.94-17.94a40 40 0 0 1 56.58 56.58l-28.12 28.12a40 40 0 0 1-54.85 1.6a8 8 0 1 0-10.64 12a56 56 0 0 0 76.81-2.27l28.12-28.11a56.08 56.08 0 0 0 0-79.24Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <div className={styles.work}>
            <img src={work3} />
            <div className={styles.layer}>
              <h3>Online Shopping App</h3>
              <p>
                The app connects you to the talented people around the world.
                Download it from play store.
              </p>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 256 256"
                >
                  <g fill="#ff004f">
                    <path
                      d="m209.94 113.94l-28 28a47.76 47.76 0 0 1-26.52 13.48a47.76 47.76 0 0 1-13.48 26.52l-28 28a48 48 0 0 1-67.88-67.88l28-28a47.76 47.76 0 0 1 26.52-13.48a47.76 47.76 0 0 1 13.48-26.52l28-28a48 48 0 0 1 67.88 67.88Z"
                      opacity=".2"
                    />
                    <path d="M137.54 186.36a8 8 0 0 1 0 11.31l-17.94 18a56 56 0 0 1-79.22-79.27l28.12-28.11a56 56 0 0 1 76.81-2.29a8 8 0 1 1-10.64 12a40 40 0 0 0-54.85 1.63L51.7 147.72a40 40 0 1 0 56.58 56.58l17.94-17.94a8 8 0 0 1 11.32 0Zm78.08-146a56.08 56.08 0 0 0-79.22 0l-17.94 17.97a8 8 0 0 0 11.32 11.31l17.94-17.94a40 40 0 0 1 56.58 56.58l-28.12 28.12a40 40 0 0 1-54.85 1.6a8 8 0 1 0-10.64 12a56 56 0 0 0 76.81-2.27l28.12-28.11a56.08 56.08 0 0 0 0-79.24Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className={styles.btn}>see more</a>
      </div>
    </div>
  );
};

export default Projects;
