import React, { useState, useEffect } from "react";
import styles from "../Styles/navbar.module.css";
import logo from "../Images/logo.png";
import resume from "../Images/Thilak-Singh-Resume.pdf";
const Navbar = () => {
  const [ismenuOpen, setIsmenuOpen] = useState(false);
  useEffect(() => {
    const sidemenu = document.getElementsByClassName("sidemenu");
    console.log(sidemenu[0]?.style.right);
    ismenuOpen
      ? (sidemenu[0].style.right = "0px")
      : (sidemenu[0].style.right = "-200px");
  }, [ismenuOpen]);
  return (
    <div id="nav-menu"
      style={{
        margin: "-0.7% 0px",
        position: "fixed",
        // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        // width: "80%",
        zIndex: 5,
        backgroundColor: "#080808",
      }}
      className={`${styles.container}`}
    >
      <nav>
        <img src={logo} alt="error" className={styles.logo} />
        <ul className={"sidemenu"}>
          <li>
            <a className="nav-link home" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link about" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link skills" href="#skills">Skills</a>
          </li>
          <li>
            <a className="nav-link projects" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a id="resume-link-1"
              href={resume}
              download={"Thilak-Singh-Resume.pdf"}
              className={`${styles.btn} ${styles.btn2} nav-link resume`}
            >
              <button className={styles.resume}
                style={{
                  fontSize: "18px",
                  color: "white",
                  border: "1px solid pink",
                  padding:10,
                  borderRadius:10,
                  cursor:"pointer"
                }}
                id="resume-button-1"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1rqkx1uOjVxpKcQuEQ2-PpcjK7hBT4EB9/view?usp=sharing"
                  )
                }
              >
                Resume
              </button>
            </a>
          </li>
          <svg
            className={styles.fas}
            onClick={() => setIsmenuOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2zm5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4l-1.6 1.6z"
            />
          </svg>
        </ul>
        <svg
          className={styles.fas}
          onClick={() => setIsmenuOpen(true)}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
          />
        </svg>
      </nav>
    </div>
  );
};

export default Navbar;
