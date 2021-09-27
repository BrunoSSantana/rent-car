import Axios from "axios";
import React, { useEffect, useState } from "react";
import CardCarsComponent from "../components/CardCarsComponent";
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
    </div>
  );
}
