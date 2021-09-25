import React, { useState } from "react";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/User.module.scss";
import userCars from "../assets/userCars.png";
import Axios from "axios";
import { useHistory } from "react-router";

export default function User() {
  const [avatar, setAvatar] = useState("");
  const [color, setColor] = useState("");
  const [daily_amount, setDaily_amount] = useState("");
  const [license_plate, setLicense_plate] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const history = useHistory();

  async function CreateCar() {
    console.log(color);
    try {
      await Axios.post(
        "http://localhost:3003/cars/new",
        {
          avatar: avatar,
          color: color,
          daily_amount: daily_amount,
          license_plate: license_plate,
          model: model,
          year: year,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => {
        console.log(response);
        history.push("/user/mycars");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
        <h1 className={styles.title}>Wellcome to RentCar</h1>
        <div className={styles.containerUser}>
          <div className={styles.imagem}>
            <img src={userCars} alt="imagemCarros" />
          </div>
          <div className={styles.register}>
            <div className={styles.formulario}>
              <h1>Cadastre seu veículo</h1>
              <label> Imagem(Url):</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setAvatar(e.target.value);
                }}
              />

              <label> Modelo:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setModel(e.target.value);
                }}
              />

              <label> Cor:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              />

              <label> Placa:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setLicense_plate(e.target.value);
                }}
              />

              <label> Ano:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />

              <label> Preço:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setDaily_amount(e.target.value);
                }}
              />
              <div className={styles.cadastrarButton}>
                <button onClick={CreateCar}>Cadastrar Vaículo</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
