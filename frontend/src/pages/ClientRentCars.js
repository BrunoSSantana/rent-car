import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardCarsComponent from "../components/CardCarsComponent";
import MenuClientComponent from "../components/MenuClientComponent";
import MenuComponent from "../components/MenuComponent";

export default function ClientRentCars() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    dataMyRents();

    
  }, []);

  async function dataMyRents() {
    await Axios.post(
      `http://localhost:3003/rents/yourrents`,
      {},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      console.log("ima: ", response.data);
      setCar(response.data);
    });
  }

  async function dataMyCars(id) {

    await Axios.post(
      `http://localhost:3003/cars/${id}`,
      {},
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    ).then((response) => {
      console.log("ima: ", response.data);
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
                id: val.car.id,
                avatar: val.car.avatar,
                color: val.car.color,
                daily_amount: val.car.daily_amount,
                license_plate: val.car.license_plate,
                model: val.car.model,
                year: val.car.year,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
