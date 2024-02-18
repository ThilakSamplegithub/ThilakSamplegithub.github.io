import React from "react";
import styles from "../Styles/githubStats.module.css"
import GitHubCalendar from 'react-github-calendar';
const GithubStats = () => {
  return (
    <div className={styles.stats}>
        <h1 style={{margin:'10px'}} className={styles.subTitle}>ithub Statistics</h1>
      <p align="left"></p>
      <p>
        &nbsp;
        <img
        id="github-stats-card"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=ThilakSamplegithub&theme=algolia&show_icons=true&locale=en"
          alt="ThilakSamplegithub"
        />
      </p>
      <div>
      <p>
        <img
          align="center" id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=ThilakSamplegithub&theme=great-gatsby"
          alt="ThilakSamplegithub"
        />
      </p>
      <p>
        <img
          align="center" id="github-streak-stats" width={"100%"}
          src="https://github-readme-stats.vercel.app/api/top-langs?username=ThilakSamplegithub&theme=omni&show_icons=true&locale=en&layout=compact"
          alt="ThilakSamplegithub"
        />
      </p></div>
      <div style={{padding:'0%',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}} className={styles.githubCalender}  >
        <GitHubCalendar username="ThilakSamplegithub" /></div>
      </div>
  );
};

export default GithubStats;
