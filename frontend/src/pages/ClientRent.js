import React, { useState } from "react";
import { useParams, useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import Axios from "axios";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/UserMyCarsEdit.module.scss";
import CardCarsComponent from "../components/CardCarsComponent";
import MenuClientComponent from "../components/MenuClientComponent";

export default function ClientRent() {
  const [car, setCar] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    dataRentCar();
  }, []);

  async function rentCar() {
    await Axios.post(
      `http://localhost:3003/rents/new`,
      {
        car_id: id,
        start_date: startDate,
        finish_date: finishDate,
      },
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      history.push("/client");
    });
  }

  async function dataRentCar() {
    await Axios.post(
      `http://localhost:3003/cars/${id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      console.log("ima: ", response.data[0]);
      setCar(response.data);
    });
  }

  return (
    <div>
      <MenuClientComponent />
      {car.map((val) => {
        return (
          <div key={val.id}>
            <CardCarsComponent
              dataCars={{
                id: val.id,
                avatar: val.avatar,
                color: val.color,
                daily_amount: val.daily_amount,
                license_plate: val.license_plate,
                model: val.model,
                year: val.year,
              }}
            />
          </div>
        );
      })}

      <div className={styles.formulario}>
        <h1>Cadastre seu veículo</h1>
        <label> Data início do aluguel:</label>
        <input
          type="date"
          name="name"
          onChange={(e) => {
            setStartDate(e.target.value);
          }}
        />

        <label> Data final do aluguel:</label>
        <input
          type="date"
          name="name"
          onChange={(e) => {
            setFinishDate(e.target.value);
          }}
        />

        <div className={styles.cadastrarButton}>
          <button onClick={rentCar}>alugar Vaículo</button>
        </div>
      </div>
    </div>
  );
}
