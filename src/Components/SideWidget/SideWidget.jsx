import React from "react";
import styles from "./SideWidget.module.css";
import HomeIcon from "../../assets/nav-home.svg";

const SideWidget = () => {
  return (
    <div className={styles.widget}>
      <div className={styles.widget__card}>
        <div className={styles.widget__hd}>
          <h4>Add to your feed</h4>
        </div>
        <div className={styles.widget__profiles}>
          <div className={styles.widget__profile}>
            <img src={HomeIcon} alt='avatar' className={styles.widget__img} />
            <div className={styles.widget__user}>
              <h4>Username</h4>
              <small>Company</small>
            </div>
          </div>
          <div className={styles.widget__profile}>
            <img src={HomeIcon} alt='avatar' className={styles.widget__img} />
            <div className={styles.widget__user}>
              <h4>Username</h4>
              <small>Company</small>
            </div>
          </div>
          <div className={styles.widget__profile}>
            <img src={HomeIcon} alt='avatar' className={styles.widget__img} />
            <div className={styles.widget__user}>
              <h4>Username</h4>
              <small>Company</small>
            </div>
          </div>
          <div className={styles.widget__profile}>
            <img src={HomeIcon} alt='avatar' className={styles.widget__img} />
            <div className={styles.widget__user}>
              <h4>Username</h4>
              <small>Company</small>
            </div>
          </div>
          <div className={styles.widget__profile}>
            <img src={HomeIcon} alt='avatar' className={styles.widget__img} />
            <div className={styles.widget__user}>
              <h4>Username</h4>
              <small>Company</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideWidget;
