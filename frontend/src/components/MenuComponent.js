import React from "react";
import styles from "../styles/styleComponent/MenuComponent.module.scss";

export default function MenuComponent(props) {
  return (
    <div className={styles.container}>
      <div className={styles.wellcome}>
        <a href="/user"><h1>RentCar</h1></a>
      </div>
      <div className={styles.wellcome}>
        <a href={`/${props.fistLink}`}>{props.firstName}</a>
        <a href="/user/perfil">Perfil</a>
        <a href="/#">Exit</a>
      </div>
    </div>
  );
}
