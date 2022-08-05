import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/home-logo.svg";
import HomeIcon from "../../assets/nav-home.svg";
import JobsIcon from "../../assets/nav-jobs.svg";
import NetworkIcon from "../../assets/nav-network.svg";
import MessagingIcon from "../../assets/nav-messaging.svg";
import NotificationIcon from "../../assets/nav-notifications.svg";
import AppsIcon from "../../assets/nav-work.svg";

const Header = () => {
  const [isUserDropdownShown, setIsUserDropdownShown] = React.useState(false);
  const handleSearch = () => {};

  const showUserDropdown = () => {
    setIsUserDropdownShown(!isUserDropdownShown);
  };

  const handleSignOut = () => alert("Signed out...");

  return (
    <>
      <div className={styles.header__wrapper}>
        <header>
          <div className={styles.brand}>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <div className={styles.searchbox}>
              <input
                type='search'
                name='search'
                required
                placeholder=''
                onClick={handleSearch}
              />
            </div>
          </div>
          <nav className={styles.nav}>
            <NavLink to='/'>
              <img src={HomeIcon} alt='icon' />
              Home
            </NavLink>
            <NavLink to='/'>
              <img src={NetworkIcon} alt='icon' />
              My Network
            </NavLink>
            <NavLink to='/'>
              <img src={JobsIcon} alt='icon' />
              Jobs
            </NavLink>
            <NavLink to='/'>
              <img src={MessagingIcon} alt='icon' />
              Messaging
            </NavLink>
            <NavLink to='/'>
              <img src={NotificationIcon} alt='icon' />
              Notifications
            </NavLink>
            <button className={styles.userAvatar} onClick={showUserDropdown}>
              <img src={HomeIcon} alt='' />
              Me
            </button>
            {isUserDropdownShown ? (
              <div className={styles.user__dropdown}>
                <div className={styles.user__info}>
                  <Link to='/profile'>View Profile</Link>
                </div>
                <div className={styles.options}>
                  <h4>Account</h4>
                  <div className={styles.options__links}>
                    <Link to='/settings'>Settings & Privacy</Link>
                    <Link to='/help'>Help</Link>
                    <Link to='/language'>Language</Link>
                  </div>
                </div>
                <div className={styles.options}>
                  <h4>Manage</h4>
                  <div className={styles.options__links}>
                    <Link to='/recent-activity'>Posts & Activity</Link>
                    <Link to='/help'>Job Post Account</Link>
                    <button onClick={handleSignOut}>Sign Out</button>
                  </div>
                </div>
              </div>
            ) : null}
          </nav>
          <div className={styles.premium}>
            <div className={styles.app}>
              <img src={AppsIcon} alt='' />
              Work
            </div>
            <div className={styles.premium__link}>
              <p>Try premium for free</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
