import React from 'react'
import { useParams } from "react-router-dom";
import Axios from 'axios'

export default function UserMyCarsEdit() {

    let { id } = useParams();

    

    function dataCarroUsuario() {
        Axios.post('http://localhost:3002/cars/available_cars', {
            id 
        }).then((response) => {
            console.log('ima: ', response.data)
        })
    }
    return (
        <div>
            <h1>edit</h1>
        </div>
    )
}
