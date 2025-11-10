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
      icon: "https://img.icons8.com/?size=100&id=38273&format=png&color=264DE4",
      name: "CSS",
      category: "frontend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=000000",
      name: "React",
      category: "frontend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
      name: "Redux",
      category: "frontend",
    },
    {
      icon: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBAgj/xABDEAABAwMCBAMFBAYGCwAAAAABAAIDBAURBiESMUFRB2GBExQicZEyQqHBFSMkUmLRFlOCkrHhFyUzNTZDRHJzw/D/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAgMEBQH/xAAkEQEAAgIBAwUBAQEAAAAAAAAAAQIDEQQSITEFEyJBUTJCM//aAAwDAQACEQMRAD8Ap9ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBF61rnODWNLnO5BoyT9F1KXTl4qQDHQva08nSEMH47/AIKdcd7eIeTMR5lykUhboy8OGSKZp7GU/kFjk0heoxkU8cnlHKPzwrZ4uWP8o9df1wkWzV0FZRH9rpJofNzdvryWsqbVtX+oT3AiIogiIgIiICIiAiIgIiICIiAiIgIiIB25rr6fsVReJnEZip2bPl8+w81p2qhdca+Klj5ybE9h1Ks4SUFkomRPkjhhYORPNbuHxoyT1X8QqyX12h7bLRRWyMNpYQHdXndx9VvKPP1laWuw10rx+8GHC2aLU1prHBjKkMedgJBw5XapmwV+NZZbVtPeXYReAgjI3Xq07Q08exr2FrwHA8w4ZBUYvmkaaraZLfinn58H3HfyUoRU5cFMsamE62mFO1dNNSTvhqY3RyM5tcsKtS+2Wnu9NwvwyZgxHIBkt/yVaXCgqLdUGCqjLXA7Ho4dwuByuJbDbt4aqZIt5ayIN+SLGtE9E54A5nkt+vtslvpKd9UOCafLmxdWt7lSitpjceHkz300ERFF6IiICIiAiIgIiICIiDs2O4xWamqKtgD62bEcLTyYBuXFcyrqqisnM1VK6SQ9T0+XZYfRFZOW016fp5qN7DunTHREVe3qQ6c1NNbHNgqnOlo+gJyY/MeSsOCaOohZNA8PjeMtcFTa7Fgv9RaJeHeWmcfiizj1C6fE500npv4UZMW+8LQRaltuVLc4PbUcgcOrPvNPmFtru1tFo3WWWYmBalyttJc4DDVxBzehGxb8ittF5asWjUkTMd0Iq9DShx9yrGFufszNOfqFgj0NXF2JamBje4yVPl8veyJjpJHBjG7ku2Cx24GHe5hZ71/Dh2vTNutA95mJmlYMmWXGGjyHJQW/XI3W5y1IP6v7MQ7NC7GqtSiva6ioHH3cH9ZJ/WeQ8lF/Rcvl5af88fhoxVn+rCIiwLRERAREQEREBDtv0C9a10j2sYCXuIDQBkk9lPLBpKGnYyoubRJMdxEfst+fcq/Bxsmefihe8U8obR2yvriPc6SWUHq1u31K60WjLxJgvbBEP4pM/krGa0MaGtaGtHIAYC9XXp6XjiPlKic8/SvXaIug5S0rv7ZH5LTqdK3mAcXuolb3icHKzk656qU+m4p8I+/ZTMkb4nlk0b43/uvbg/RfKt+voKWvjLKuFkgxzI3HqoJqHS01vBqKPimpx9oY+Jn8wufn4F8fevddXLEo2i8Bzn5r1c9cy01RNSyCWmmfE8feYVI6LW1dCA2phjqAOo+EqLorsefJj/mUZrE+U8j1zRkfrKSdp7NIK+364oAMtpqk+RAH5qAItEeoZ4+0PZqmNVrt5HDR0Qae8j8/gFHbneK+5n9rnJYOUbdmj0WhzRU5OTlv5lKtK18CIizpiIiAiIgIiICIvqJofKxjjhrnAE5xhexG5Ez0NZ2tiN0qGjJyIeL7o6uXYrdUWqiJHtzM8fdiGfxUOvV9kqY20NETDQxjhbw7GTHUrh8ugHyXRjmRhr0YoU+11Tuywo9a2wkcbJ2A9S3K7VvulFcW5pJ2v7tzuPRVGslPNJTytlge6ORpyHNOF7j9TyRPyjs8nBGuy5EUb0xqZlzb7vW8LKxvLbDZR3HmpIu1izVy16qyzWrNZ1IhwQc4IPPPVEVkxH2ihOqNK8JdW2qP4eckI6ebf5KGnY/kroXAu+laC4vMrOKmmPN0Y2d8wuTyvT+r5Y1+PNrtKtkUsfoaqB+CtgcD1LCCtui0LG1wdXVbnt6siGM+pWCOBmmdaXzlqi1ptc90n4IfgjbvLMR8MY7rTlMZleYc+y4jwcXPh6ZU81VVU1ms36PoGNhdMMYbza3qSoCNgocjHGL4fb2lpt3ERFmTEREBERAREQEREBERAREQEREHrXOY9r2OII5EHBBU309q9kjW012PBJybP0Pk7+ag6K/DyL4Z3CN6RaNSudjmvaHMIcDyIOcr1VPbb1X20j3aciMf8t3xN+ikFLrqVoAqqNrj+8x2PwXZx+pY7R8uzLOG0eE4RRNuuqPHx0k+fIhY5ddwgfqaKQn+JwCunnYIjfUj7V/xMFyb7fqS0wkPfx1BHwQt5k+fYKHV2r7lVNLIS2maf6vc/UrgPe+V5fI4uceZcckrHn9SrrWNbTD+s9dWzXCqfUVTuJ7+nQeS1kRca1ptO5aYjQiIvAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBCcDJRb9hNqF3pv6QCX9GZPvHsc8eOE4xjzwg+rlY7na6Wkqq+kfBFVguhL8Zc0dcLndlfXiUdHDT1o/TRruH3R36OMQdt8IxxY9FDLBo/T1o0vTaj13UThlXvTUcBPE4d8Dcnr2wgrhSKx6Rrb1p253qnqKaOG35D45HYc/ABOPr1U/01ozQWrDVVlnlr2wwxn2lDM8sdG7o4Ht6kKO6UsNHX6A1XWyumbLRSkx+zkLQ7hZsHAfaGe6Dh1Ok5KfQdHqv35jmVNQIfdfY7t3cM8Wd/s9uqjn+PZWfcHRjwEsr5gTGLi0va3Ykcb84XM11o2jt1zsDdPNlNLd2MDA95eeMkdT5FBA1v2G1TXy8UlsppI45Kp/C18pw1u2cn0CnHitoGj0tSW6psjZZGzOMMwdIX5kxtjtlbdz0hZLJrTSdmgE5q6jElY4zE4PCeXbcE+iCv9SWafT97q7VVSRSzUzgHPiOWuyARj6rnKzrVoq03HxWvVhq/eZKOBvGwmd3GXFrTku5ncnms9vsnhk+8f0cdJcZ7g6Qw++8Tgz2nYHO2PkgqleEgBTaDw9qqjxAm0q2oPs4D7V9URu2HnxfPcBdqsoPCmOqfZfb3NtQ13sjcQXGNsnLJPLn5YQQ7U+lK7TdNbp62WCRtfF7WIREkgYB3yPNcHplW741W2dztJ2uj/aJ3Re7xcP3zsAfIFYK/Tnh9o4xW/VFRW3C6PYHTe7B3DHnyBGB2zkoKpPlv8k+qnFx0hY6rVVnoNMX1lRR3T48OOZKZvPfbfbIGdwea717sXhtaq6qsVebtQVcDP94ScRa92M7d/phBVPTP0T/4eannh5pC03qmu93u0tVPbrZsIaZhEk+2c458sbBaWrItDy2qKs0zPXUteX8L7fUtLjjuTvw/VBEEREBERAREQF8yDLHDuF9IgubXtguGrNGadrrE2KohpKMulPtA3A4Rn/ArDc7VJ4j6Bsc+n5YpK61xiOake8NJ+HHodlU9PX1tNE6KmraqGJ32o45nNafmAcL5o6uqoJfbUFTPSy4x7SnldG7HzaQgu/wp0VcdNPuVZenRQVdTTFkdK2QOcGDOXHHmo7oXP+jHXfk9+w/7FW77ncX1L6l9xrXVD28LpnVDy8jtxZzhYY6mojikhiqJmRSf7SNkhDX/ADAOD6oLIuoB8ALRk/8AXjH956lnhdLR3/R9rqbg/M2m6l7hk9Ax3DnywQf7Kos1NQadtMaiY07TkQmQ8APfh5ZSGpqIGSMgqZ4mSjEjY5XNDx5gHdBdnhvcodeQXOkujuJ1NdGXCEfwcWWj8MKJw3j9O+N9NWsdxRe/+yhP8DGuaPxyfVV/T1E9K4upZ5YHEYLopCwkdjhfEUkkMjZIZHxyNOWvY4hwPkeaC8dNjPjxqL/xf+tiqzT/APx7R74/1nvt/Gf8lxm1tWyofUMrKls7/tTCZwe75uzkrE2R7XiRsj2vB4g8OIcD3ygvI3qktXjZdKa4SMhhuNGynbK444X4BH139cKG1fhBqNl3dBGKc24yZ9+dMAGx5zkjnnCgE80tTIZKmWSaR3N8ry4n1K2X3a6PpPc33SvdS4x7B1U8s/u5wguHxPr4NPX3RNcSZ6WiALnDm5gABI9N1zdfeHl11Ff5L/pl9PcKK5cEnEJgOA8IHqNvRVTNU1E7WNnqJpWxjDBJIXBo7DPJZqK6XK3xmOguNbSxu5sp6h8bT6AgIJZcdC1Vg1HZ7YzUFBFc6rhe4hxaaZ/fPXPTllWnZ6TVdXcZLTra1264WljHD9IHhaSMbbc9+q/O0jnSve+VzpHvOXOeeIuPck81uSXe6SUnukl0r302MexdVSFmO3DnCCwNF2q9w3fUVVoG60nBSTmNtFK/JqGZ2J8huAfLC7mv6I1fhzPddV2mktl+jka2n9k5vFIcgYOPLO3kqapqiekmbNSTzU8rRgSQyFjgO2RuslbX1twe19wramre0Ya6omdIR8uIlBroiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIP//Z",
      name: "",
      category: "frontend",
    },
    {
      icon: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png",
      name: "React Native",
      category: "frontend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
      name: "Node JS",
      category: "backend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000",
      name: "Express",
      category: "backend",
    },
    {
      icon: "https://alih6051.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg",
      name: "MongoDB",
      category: "backend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000",
      name: "Mongoose",
      category: "backend",
    },
    {
      icon: "https://www.python.org/static/community_logos/python-logo-master-v3-TM.png",
      name: "",
      category: "backend",
    },
    {
      icon: "https://img.icons8.com/?size=100&id=QSjnrUKYMnxO&format=png&color=000000",
      name: "SQL",
      category: "backend",
    },
     {
      icon: "https://img.icons8.com/?size=100&id=38561&format=png&color=000000",
      name: "PostgreSql",
      category: "backend",
    },
    {
      icon: "https://cdn.vectorstock.com/i/500p/33/66/artificial-intelligence-icon-sign-logo-vector-49693366.jpg",
      name: "",
      category: "backend",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/860/860142.png",
      name: "Containerization",
      category: "DevOps",
    },
    {
      icon: "data:image/png;base64,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",
      name: "",
      category: "DevOps",
    },
    {
      icon: "data:image/png;base64,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",
      name: "",
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
            <div className={styles.devops}>
            {devops?.map(({icon,name}) => (
              <div className="skills-card" style={{ textAlign: "center" }}>
              <img
                className="skills-card-img"
                src={icon}
                alt={name}
                width={100}
              />
              <p className="skills-card-name">{name}</p>
            </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
