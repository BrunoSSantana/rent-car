import React from "react";
import styles from "../styles/styleComponent/MenuComponent.module.scss";

export default function MenuClientComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.wellcome}>
        <a href="/user"><h1>RentCar</h1></a>
      </div>
      <div className={styles.wellcome}>
        <a href="/client/rentCars">Carros Alugados</a>
        <a href="/client/perfil">Perfil</a>
        <a href="/#">Exit</a>
      </div>
    </div>
  );
}
