import React from "react";
import styles from "./Backdrop.module.css";

const Backdrop = ({ children, showModal, setShowModal }) => {
  const handleCloseModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={styles.backdrop} onClick={handleCloseModal}>
      {children}
    </div>
  );
};

export default Backdrop;
