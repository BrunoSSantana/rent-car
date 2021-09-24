import React from "react";
import MenuComponent from "../components/MenuComponent";
import UserComponent from "../components/UserComponent";
import styles from "../styles/stylePage/User.module.scss";
import teste from '../styles/styleComponent/UserComponent.module.scss'

export default function User() {
  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
        <UserComponent />
      </div>
    </div>
  );
}
