import React from "react";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/User.module.scss";

export default function UserRent() {
  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent />
      </div>
    </div>
  );
}

