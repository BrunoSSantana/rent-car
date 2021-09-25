import React from "react";
import CardCarsComponent from "../components/CardCarsComponent";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/User.module.scss";

export default function UserMyCars() {
  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
        <h1>UserMyCars</h1>
        <CardCarsComponent />
      </div>
    </div>
  );
}
