import React from "react";
import styles from "../styles/styleComponent/CardCarsComponent.module.scss";

export default function CardCarsComponent({dataCars}) {


    const {
        id,
        avatar,
        color,
        daily_amount,
        license_plate,
        model,
        year,
      } = dataCars

  return (
    <div className={styles.container}>
      <div className={styles.perfilCars}>
        <div className={styles.imageCars}>
            <img src={avatar} alt="carro" />
        </div>
        <div className={styles.priceCars}>
            <h1>Price: <br/> {daily_amount}</h1>
        </div>
      </div>
      <div className={styles.dataCars}>
        <h2>{model} </h2>
        <h2>{color} </h2>
        <h2>{license_plate} </h2>
        <h2>{year} </h2>
      </div>
    </div>
  );
}
