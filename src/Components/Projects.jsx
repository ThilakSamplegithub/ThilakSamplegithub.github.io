import React from "react";
import styles from "../Styles/projects.module.css";
import work11 from "../Images/work-11.png";
import work22 from "../Images/work-22.png";
import work33 from "../Images/work-33.png";
import work44 from "../Images/work-44.png";
import work55 from "../Images/work-55.png";
const Projects = () => {
  const projects = [
    {
      title: "Foodies paradise",
      image: work11,
      description:
        "Architected Foodies Paradise, an innovative e-commerce platformset to redefine online grocery shopping.",
      githubLink: "https://github.com/ThilakSamplegithub/FullStack-foodies-1",
      live: "https://d2eqge3vjea0la.cloudfront.net",
      dockerImage:
        "https://hub.docker.com/repository/docker/truimphthilak15/hey-foodies-paradise/general",
      role: "Team Lead",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Chakra UI",
        "Reactjs",
        "Redux",
        "RestFUl api",
        "Node.js",
        "Express.js",
        "Mongodb",
        "Mongoose",
        "MERN",
        "Memoization",
        "firebase",
        "Lazy-Loading",
        "google-auth",
        "Dockerized",
        "AWS",
        "S3"
      ],
    },
    {
      title: "Spark Riders",
      image: work55,
      description:
        "Riders Share: Streamlining passenger-driver connections for efficient and convenient ride-sharing.",
      githubLink:
        "https://github.com/ThilakSamplegithub/Riders-Share-fullstack",
      live: "https://65c890b35289ee00cf1137a1--rococo-puppy-d96d56.netlify.app/",
      role: "Team Lead",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Chakra UI",
        "Reactjs",
        "Redux",
        "RestFUl api",
        "Node.js",
        "Express.js",
        "Mongodb",
        "Mongoose",
        "MERN",
        "JWT",
        "Regex",
        "Relationships",
      ],
    },
    {
      title: "Superstar Investors Tracker",
      image: work55,
      description:
        "Discover common stock picks held by top investors like Warren Buffett, Rakesh Jhunjhunwala, and Ray Dalio. Analyze smarter.",
      githubLink:
        "https://github.com/ThilakSamplegithub/SuperStar-Investors-Website",
      live: "https://superstarinvestorstracker.com/",
      role: "Individual",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "RestFUl api",
        "Node.js",
        "Express.js",
        "AWS s3",
        "CloudFront",
        "Aws Route53",
        "SSL certificate",
        "Web Scraping",
        "Chrome Extension"
      ],
    },
    {
      title: "ShopCart",
      image: work22,
      description:
        "shopcart-An e-commerce website selling vast range of Electronic products like headphones, laptops,tablet etc.",
      githubLink: "https://github.com/ThilakSamplegithub/ShopCart",
      live: "https://myapp-asimji.vercel.app/",
      role: "Team member",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Chakra UI",
        "Reactjs",
        "Redux",
        "RestFUl api",
      ],
    },
    {
      title: "Dressing Valley",
      image: work33,
      description:
        "An eCommerce platform known to offer a stylish collection of clothing and accessories for women, men, and kids.",
      githubLink: "https://github.com/ThilakSamplegithub/Dressing-Valley",
      live: "https://ecommercewebsiteusingreact.vercel.app/",
      role: "Individual",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Chakra UI",
        "Reactjs",
        "RestFUl api",
      ],
    },
    {
      title: "Code Converter",
      image: work44,
      description:
        "Designed a multifunctional web app for code conversion, quality analysis, and debugging.",
      githubLink: "https://github.com/ThilakSamplegithub/Code-Converter",
      live: "https://code-converter-9sw36h9t0-thilaksamplegithub.vercel.app/",
      dockerImage:
        "https://hub.docker.com/repository/docker/truimphthilak15/hey-code-converter/general",
      role: "Individual",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "Reactjs",
        "openAI",
        "RestFUl api",
        "Dockerized",
      ],
    },
  ];
  return (
    <div id={"projects"}>
      <div>
        <h1 className={styles.subTitle}>rojects</h1>
        <div className={styles.work_list}>
          {projects.map(
            ({
              image,
              title,
              description,
              techStack,
              live,
              githubLink,
              role,
              dockerImage,
            }) => {
              return (
                <div className={`${styles.work} project-card`}>
                  <img src={image} width={"100%"} />
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
                      </a>
                      {dockerImage && (
                        <a href={dockerImage} target="_blank">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="currentColor"
                              d="M12 6v3H6v3H3v3h-.938a1 1 0 0 0-.78.406s-.087.106-.126.188c-.039.082-.066.207-.093.312a2.97 2.97 0 0 0-.094.813c0 .687.082 1.449.281 2.218A5.83 5.83 0 0 0 1 19h.281a9.42 9.42 0 0 0 .969 2.313c.012.019.02.042.031.062v.031c.059.242.203.453.406.594l.032.031c.168.235.336.465.531.688c1.637 1.883 4.277 3.312 8.031 3.312c5.766 0 10.758-2.375 13.75-7.031h5.063c-.633-.16-2.008-.39-1.782-1.219c-.699.809-1.992.98-3.062.844c.352-.582.68-1.195.969-1.844c1.656-.097 2.914-.656 3.625-1.343c.812-.786 1.062-1.688 1.062-1.688a1 1 0 0 0-.312-1.031s-1.512-1.059-3.688-.844c-.746-1.992-2.312-2.969-2.312-2.969a1.006 1.006 0 0 0-.688-.125a.987.987 0 0 0-.437.219s-.457.406-.813 1.063c-.355.656-.676 1.652-.562 2.906c.043.46.324.867.5 1.312c-.125.078-.242.168-.407.25a4.689 4.689 0 0 1-2.093.469H20v-3h-3V6zm2 2h1v1h-1zm-6 3h1v1H8zm3 0h1v1h-1zm3 0h1v1h-1zm10.344.313c.36.406.75.98.906 1.812a1.004 1.004 0 0 0 1.25.781c.906-.246 1.566-.168 2.031-.031c-.054.066-.02.055-.093.125c-.458.441-1.223.934-2.813.875a1.007 1.007 0 0 0-.969.625c-.449 1.113-.972 2.113-1.593 3c-1.477.574-4.762.152-5.032-.594c-.976 1.145-3.988 1.145-4.968 0c-.317.88-4.876 1.285-5.657.157c-.629.585-2.918.976-4.218.093A7.56 7.56 0 0 1 3.03 17h17.063a6.72 6.72 0 0 0 2.968-.688a6.794 6.794 0 0 0 1.219-.75a.983.983 0 0 0 .469-.671a.988.988 0 0 0-.188-.797c-.265-.348-.417-.774-.468-1.313c-.063-.703.097-1.11.25-1.469zM5 14h1v1H5zm3 0h1v1H8zm3 0h1v1h-1zm3 0h1v1h-1zm3 0h1v1h-1zM3.406 19h19.282c-2.633 3.406-6.614 5.031-11.407 5.031c-2.511 0-4.273-.676-5.531-1.656c2.125-.074 3.656-.625 3.656-.625a1.002 1.002 0 1 0-.5-1.938c-.054.016-.105.04-.156.063c0 0-2.191.719-4.781.406A7.067 7.067 0 0 1 3.406 19m7.313.188a.601.601 0 0 0-.594.593c0 .32.273.594.594.594c.32 0 .562-.273.562-.594a.583.583 0 0 0-.031-.218a.253.253 0 0 1-.219.125c-.133 0-.219-.118-.219-.25c0-.09.024-.149.094-.188c-.066-.027-.113-.063-.187-.063z"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                    <b style={{ margin: "10px 0px 0px 0px" }}>Role :{role}</b>
                    <div className={`${styles.tech} project-tech-stack`}>
                      {techStack.map((el) => {
                        return <button>{el}</button>;
                      })}
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
        <a href="#" className={styles.btn}>
          see more
        </a>
      </div>
    </div>
  );
};

export default Projects;
