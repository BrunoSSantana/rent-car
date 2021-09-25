import React, { useState } from "react";
import MenuComponent from "../components/MenuComponent";
import styles from "../styles/stylePage/UserPerfil.module.scss";

export default function UserPerfil() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateUsuario(){

  }
  function deleteUsuario(){
    
  }
  

  return (
    <div className={styles.container}>
      <div className={styles.patternScreen}>
        <MenuComponent fistLink="user/mycars" firstName="My Cars" />
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

              <label> Telefone:</label>
              <input
                type="text"
                name="name"
                onChange={(e) => {
                  setPhone(e.target.value);
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
