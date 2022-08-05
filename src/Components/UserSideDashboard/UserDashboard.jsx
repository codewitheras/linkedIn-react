import React from "react";
import styles from "./UserDashboard.module.css";
import HomeIcon from "../../assets/nav-home.svg";

const UserDashboard = () => {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.profile__card}>
          <div className={styles.profile__top}></div>
          <div className={styles.profile__avatar}>
            <img src={HomeIcon} alt='' />
            <div className={styles.profile__name}>
              <h4>Erasmus Mensah</h4>
              <p>Fronted Web Developer</p>
            </div>
          </div>
          <div className={styles.profile__stats}>
            <div className={styles.view}>
              <p>Who's viewed your profile</p>
              <p>1</p>
            </div>
            <div className={styles.connections}>
              <div className={styles.growth}>
                <h4>Connections</h4>
                <p>Grow your network</p>
              </div>
              <p>115</p>
            </div>
          </div>
          <div className={styles.try__premium}>
            <p>Access exclusive tools and insights</p>
            <b>Try premium for free.</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
