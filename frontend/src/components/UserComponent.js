import React from "react";
import styles from "../styles/styleComponent/UserComponent.module.scss";
import userCars from "../assets/userCars.png";

export default function UserComponent() {
  return (
    <>
      <h1 className={styles.title}>Wellcome to RentCar</h1>
      <div className={styles.container}>
        <div className={styles.imagem}>
          <img src={userCars} alt="imagemCarros" />
        </div>
        <div className={styles.register}>
          <div className={styles.formulario}>
            <h1>Cadastre seu veículo</h1>
            <label> Imagem(Url):</label>
            <input type="text" name="name" />

            <label> Modelo:</label>
            <input type="text" name="name" />

            <label> Cor:</label>
            <input type="text" name="name" />

            <label> Placa:</label>
            <input type="text" name="name" />

            <label> Ano:</label>
            <input type="text" name="name" />

            <label> Preço:</label>
            <input type="text" name="name" />
            <div className={styles.cadastrarButton}>
              <button>Cadastrar Vaículo</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
