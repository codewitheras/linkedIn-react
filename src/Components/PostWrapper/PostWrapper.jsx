import React from 'react'
import styles from "./PostWrapper.module.css";
import HomeIcon from "../../assets/nav-home.svg";
import { FcPicture, FcFilm, FcPlanner } from "react-icons/fc";
import Post from "../Post/Post";
import Modal from "./../Modal/Modal";
import Backdrop from "./../Backdrop/Backdrop";

const PostWrapper = () => {
  const [showModal, setShowModal] = React.useState(false);

  const showModalHandler = () => setShowModal(!showModal);

  const openPhotos = () => alert("Photo uploaded");
  return (
    <div className={styles.post__wrapper}>
      {/* Post Input */}
      <div className={styles.post__input}>
        <div className={styles.post__inputbox}>
          <img src={HomeIcon} alt='' />
          <button className={styles.postInput__btn} onClick={showModalHandler}>
            Start a post
          </button>
        </div>
        <div className={styles.post__modalBtns}>
          <button onClick={openPhotos}>
            <FcPicture className={styles.button__img} />
            Photo
          </button>
          <button>
            <FcFilm className={styles.button__img} />
            Video
          </button>
          <button>
            <FcPlanner className={styles.button__img} />
            Events
          </button>
          <button>
            <FcPicture className={styles.button__img} />
            Write Article
          </button>
        </div>
      </div>
      {showModal ? (
        <Backdrop showModal={showModal} setShowModal={setShowModal}>
          <Modal />
        </Backdrop>
      ) : null}
      {/* Individual post */}
      <div className={styles.post__container}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostWrapper;

