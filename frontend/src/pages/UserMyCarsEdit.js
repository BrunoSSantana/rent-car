import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import MenuComponent from "../components/MenuComponent";
import CardCarsComponent from "../components/CardCarsComponent";
import styles from "../styles/stylePage/UserMyCarsEdit.module.scss";
import { useHistory } from "react-router";

export default function UserMyCarsEdit() {
  const [car, setCar] = useState([]);

  const [avatar, setAvatar] = useState("");
  const [color, setColor] = useState("");
  const [daily_amount, setDaily_amount] = useState("");
  const [license_plate, setLicense_plate] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");

  const history = useHistory();

  let { id } = useParams();

  useEffect(() => {
    dataCarroUsuario();
  }, []);

  async function dataCarroUsuario() {
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

  async function updateCar() {
    try {
      await Axios.put(
        "http://localhost:3003/cars/update",
        {
          id,
          avatar,
          color,
          daily_amount,
          license_plate,
          model,
          year,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => {
        console.log("update cars", response);
        dataCarroUsuario();
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteCar() {
    try {
      await Axios.post(
        "http://localhost:3003/cars/delete",
        {
          id,
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
    <div>
      <MenuComponent />
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
          <button onClick={updateCar}>Atualizar Vaículo</button>
          <button onClick={deleteCar}>Deletar Carro</button>
        </div>
      </div>
    </div>
  );
}
