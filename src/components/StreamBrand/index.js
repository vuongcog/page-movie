import React from "react";
import styles from "./styles.module.scss";
const StreamBrand = ({ avatar, name, nickName }) => {
  return (
    <div className={styles.container}>
      <img src={avatar}></img>
      <div className={styles[`container-name`]}>
        <h4 className={styles.name}>{name}</h4>
        <h5 className={styles.nickName}>{nickName}</h5>
      </div>
    </div>
  );
};

export default StreamBrand;
