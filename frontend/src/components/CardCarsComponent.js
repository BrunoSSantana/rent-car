import React from "react";
import styles from "../styles/styleComponent/CardCarsComponent.module.scss";

export default function CardCarsComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.perfilCars}>
        <div className={styles.imageCars}>
            <img src='/userCars.png' alt="carro" />
        </div>
        <div className={styles.priceCars}>
            <h1>Price: <br/> 500/day</h1>
        </div>
      </div>
      <div className={styles.dataCars}>
        <h2>asd </h2>
        <h2>asdasd </h2>
        <h2>asdasda </h2>
        <h2>dsasda </h2>
      </div>
    </div>
  );
}
