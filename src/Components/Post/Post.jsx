import React from "react";
import styles from "./Post.module.css";
import HomeIcon from "../../assets/nav-home.svg";
import { Link } from "react-router-dom";
import PostImg from "../../assets/Wall M1.jpg";
import { HiThumbUp, HiChat } from "react-icons/hi";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoShareSocial } from "react-icons/io5";

const Post = () => {
  return (
    <div className={styles.post}>
      <div className={styles.post__hd}>
        <div className={styles.userAvatar}>
          <Link to='/profile'>
            <img src={HomeIcon} alt='profile avatar' />
          </Link>
        </div>
        <div className={styles.user__info}>
          <Link to='/profile' className={styles.username}>
            Username
          </Link>
          <small className={styles.post__timestamp}>30 mins ago</small>
        </div>
      </div>
      <div className={styles.post__content}>
        <p className={styles.post__txt}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti odio
          expedita at ducimus. Tempora non facilis reiciendis consequuntur.
          Repudiandae veniam exercitationem, perferendis asperiores unde quia!
        </p>
        <div className={styles.post__content_img}>
          <img src={PostImg} alt='' loading='lazy' />
        </div>
        <div className={styles.action__btns}>
          <button className={styles.action__btn}>
            <HiThumbUp className={styles.action__btn_icons} />
            Like
          </button>
          <button className={styles.action__btn}>
            <HiChat className={styles.action__btn_icons} />
            Comment
          </button>
          <button className={styles.action__btn}>
            <IoShareSocial className={styles.action__btn_icons} />
            Share
          </button>
          <button className={styles.action__btn}>
            <RiSendPlaneFill className={styles.action__btn_icons} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
