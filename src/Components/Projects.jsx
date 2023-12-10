import React from "react";
import styles from "../Styles/projects.module.css";
import work11 from "../Images/work-11.png";
import work22 from "../Images/work-22.png";
import work33 from "../Images/work-33.png";
import work44 from "../Images/work-44.png";
const Projects = () => {
  const projects = [
    {
      title: "Foodies paradise",
      image: work11,
      description:
        "Architected Foodies Paradise, an innovative e-commerce platformset to redefine online grocery shopping.",
      githubLink:"https://github.com/ThilakSamplegithub/Foodies-Paradise",
      live:"https://sprightly-lolly-ea509d.netlify.app/",
      role:'team Lead',
      techStack:["HTML","CSS","Javascript","Chakra UI","Reactjs","Redux","RestFUl api"]
    },
    {
      title: "ShopCart",
      image: work22,
      description:
        "shopcart-An e-commerce website selling vast range of Electronic products like headphones, laptops,tablet etc.",
      githubLink:"https://github.com/ThilakSamplegithub/ShopCart",
      live:"https://myapp-asimji.vercel.app/",
      role:'team member',
      techStack:["HTML","CSS","Javascript","Chakra UI","Reactjs","Redux","RestFUl api"]
    },
    {
      title: "Dressing Valley",
      image: work33,
      description:
        "An eCommerce platform known to offer a stylish collection of clothing and accessories for women, men, and kids.",
      githubLink:"https://github.com/ThilakSamplegithub/Dressing-Valley",
      live:"https://ecommercewebsiteusingreact.vercel.app/",
      role:'Individual',
      techStack:["HTML","CSS","Javascript","Chakra UI","Reactjs","RestFUl api"]
    },
    {
      title: "Code Converter",
      image: work44,
      description:
        "Designed a multifunctional web app for code conversion, quality analysis, and debugging.",
      githubLink:"https://github.com/ThilakSamplegithub/Code-Converter",
      live:"https://code-converter-app-tan.vercel.app/",
      role:'team Lead',
      techStack:["HTML","CSS","Javascript",'Reactjs','openAI',"RestFUl api"]
    },
  ];
  return (
    <div id={"projects"}>
      <div >
        <h1 className={styles.subTitle}>My Projects</h1>
        <div className={styles.work_list}>
            {projects.map(({image,title,description,techStack,live,githubLink,role})=>{
              return<div className={`${styles.work} project-card`}>
                <img src={image} width={'100%'}/>
                <div className={styles.layer}>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className={styles.icons}>
                <a
                  target="_blank"
                  href={githubLink}
                  className="project-github-link"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#ff004f"
                      d="M12 1A10.89 10.89 0 0 0 1 11.77A10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11a2.37 2.37 0 0 0 3.2.89a2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91a3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77A10.89 10.89 0 0 0 12 1"
                    />
                  </svg>
                </a>
                <a
                  target="_blank"
                  href={live}
                  className="project-deployed-link"
                >
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
                </a></div>
                <b style={{ margin: "10px 0px 0px 0px" }}>Role :{role}</b>
                <div className={`${styles.tech} project-tech-stack`}>
                  {techStack.map(el=>{
                    return<button>{el}</button>
                  })}
                </div>
                </div>
                </div>
            })}
        </div>
        <a href="#" className={styles.btn}>
          see more
        </a>
      </div>
    </div>
  );
};

export default Projects;
