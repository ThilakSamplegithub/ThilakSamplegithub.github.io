import React from "react";
import styles from "../Styles/githubStats.module.css"
import GitHubCalendar from 'react-github-calendar';
const GithubStats = () => {
  return (
    <div className={styles.stats}>
        <h1 style={{margin:'10px'}}>Github Statistics</h1>
      <p align="left"></p>
      <p>
        &nbsp;
        <img
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=ThilakSamplegithub&theme=algolia&show_icons=true&locale=en"
          alt="ThilakSamplegithub"
        />
      </p>
      <div>
      <p>
        <img
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=ThilakSamplegithub&theme=great-gatsby"
          alt="ThilakSamplegithub"
        />
      </p>
      <p>
        <img
          align="center" width={"100%"}
          src="https://github-readme-stats.vercel.app/api/top-langs?username=ThilakSamplegithub&theme=omni&show_icons=true&locale=en&layout=compact"
          alt="ThilakSamplegithub"
        />
      </p></div>
      <div className={styles.githubCalender}  >
        <GitHubCalendar style={{display:"block",margin:"auto"}} username="ThilakSamplegithub" /></div>
      
    </div>
  );
};

export default GithubStats;
