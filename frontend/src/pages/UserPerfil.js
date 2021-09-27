import React, { useEffect, useState } from "react";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/UserPerfil.module.scss";
import Axios from "axios";

export default function UserPerfil() {
  const [name, setName] = useState("");
  //const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function updateUsuario() {
    try {
      await Axios.put(
        "http://localhost:3003/users/update",
        {
          email,
          name,
          password,
        },
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteUsuario() {
    try {
      await Axios.delete("http://localhost:3003/users/delete",{
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        console.log('asd',response);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function encontrarUser() {
    try {
      await Axios.delete("http://localhost:3003/users/delete", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {
   // encontrarUser()
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent  />
        <h1>UserPerfil</h1>
        <div className={styles.containerData}>
          <div className={styles.containerUpdate}>
            <div className={styles.formulario}>
              <h1>Alterar dados de usuário</h1>
              <label> Nome:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />


              <label> Email:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label> Senha:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <div className={styles.cadastrarButton}>
                <button onClick={updateUsuario}>Atualizar dados</button>
              </div>
            </div>
          </div>
          <div className={styles.containerDelete}>
            <button onClick={deleteUsuario}>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
