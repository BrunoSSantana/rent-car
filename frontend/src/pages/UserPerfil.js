import React from "react";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/User.module.scss";

export default function UserPerfil() {
  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
        <h1>UserPerfil</h1>
      </div>
    </div>
  );
}


