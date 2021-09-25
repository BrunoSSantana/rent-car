import React, { useEffect, useState } from "react";
import CardCarsComponent from "../components/CardCarsComponent";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/UserMyCars.module.scss";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function UserMyCars() {
  const [allCars, setAllCars] = useState([]);

  useEffect(() => {
    getAllCarsUser();
  }, []);

  async function getAllCarsUser() {
    console.log(localStorage.getItem("token"));
    try {
      await Axios.get("http://localhost:3003/cars/all_cars", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        console.log(response.data);
        setAllCars(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
        <h1>UserMyCars</h1>

        <div className={styles.cardCars}>

        {allCars.map((val) => {
          return (
            <Link to={{ pathname: `/user/mycars/edit/${val.id}` }} style={{ textDecoration: 'none' }}>
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
            </Link>
          );
        })}
        </div>
      </div>
    </div>
  );
}
