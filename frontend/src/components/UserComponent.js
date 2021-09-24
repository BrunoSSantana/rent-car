import React from "react";
import styles from "../styles/styleComponent/UserComponent.module.scss";
import userCars from "../assets/userCars.png";

export default function UserComponent() {
  return (
    <>
      <h1 className={styles.title}>Wellcome to RentCar</h1>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <img src={userCars} />
        </div>
        <div className={styles.register}>
          <form className={styles.formulario}>
            <label>
              Imagem:
              <input type="text" name="name" />
            </label>
            <label>
              Modelo:
              <input type="text" name="name" />
            </label>
            <label>
              Cor:
              <input type="text" name="name" />
            </label>
            <label>
              Placa:
              <input type="text" name="name" />
            </label>
            <label>
              Ano:
              <input type="text" name="name" />
            </label>
            <label>
              Preço:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </>
  );
}
