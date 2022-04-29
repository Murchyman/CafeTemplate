import React from "react";
import styles from "../styles/MenuNav.module.css";
const menuNav = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h1>Menu</h1>
      </div>
      {/* this is bad, we are hard coding four sections and the fourth section has whitespace even though it goes unused! */}
      <div className={styles.links}>
        <a className={styles.link} href="#MenuSection1">
          {props?.Menu?.[0]?.[0]?.Heading}
        </a>
        <a className={styles.link} href="#MenuSection2">
          {props?.Menu?.[1]?.[0]?.Heading}
        </a>
        <a className={styles.link} href="#MenuSection3">
          {props?.Menu?.[2]?.[0]?.Heading}
        </a>
        <a className={styles.link} href="#MenuSection4">
          {props?.Menu?.[3]?.[0]?.Heading}
        </a>

        <a className={styles.link} href="#Info">
          Info
        </a>
      </div>
    </div>
  );
};

export default menuNav;
