import React, { useState } from "react";
import MenuComponent from "../components/MenuComponent";
import Axios from "axios";
import { useEffect } from "react/cjs/react.development";
import CardCarsComponent from "../components/CardCarsComponent";
import styles from "../styles/stylePage/Client.module.scss";
import { Link } from "react-router-dom";
import MenuClientComponent from "../components/MenuClientComponent";

export default function Client() {
  const [allAvailableCars, setAllAvailableCars] = useState([]);

  useEffect(() => {
    getAllAvailableCars();
  }, []);

  async function getAllAvailableCars() {
    try {
      await Axios.post(
        "http://localhost:3003/cars/available_cars",
        {},
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => {
        console.log(response.data);
        setAllAvailableCars(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <MenuClientComponent />

      <div className={styles.card}>
        {allAvailableCars.map((val) => {
          return (
            <div key={val.id}>
              <Link to={`/client/rent/${val.id}`}>
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
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
