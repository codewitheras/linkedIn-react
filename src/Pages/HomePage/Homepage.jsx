import React from "react";
import styles from "./Homepage.module.css";
import UserDashboard from "./../../Components/UserSideDashboard/UserDashboard";
import PostWrapper from "./../../Components/PostWrapper/PostWrapper";
import SideWidget from "./../../Components/SideWidget/SideWidget";;

const Homepage = () => {
  return (
    <>
      <div className={styles.grid__wrapper}>
        <div className={styles.grid__app}>
          {/* Side bar */}
          <div className={styles.sidebar}>
            <UserDashboard />
          </div>
          <div className={styles.main__post}>
            {/* Main Post Section */}
            <PostWrapper />
          </div>
          <div className={styles.widget}>
            {/* Side Widget */}
            <SideWidget />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
