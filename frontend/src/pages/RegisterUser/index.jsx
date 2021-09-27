import React, { useState } from "react";
import { useHistory } from "react-router";
import Axios from "axios";

import {
  Container,
  ContainerName,
  Content,
  InputLogin,
  InputLastName,
  InputName,
  Title,
  Wrapper,
  Button,
} from "./styles";

export default function RegisterUser() {

  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function registerUser() {
    try {
      await Axios.post("http://localhost:3003/users/new", {
        name,
        email,
        password
      }).then((response) => {
        console.log(response);
        history.push("/");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <Content>
        <Title>Alugue seu carro com a RentCar</Title>
        <Container>
          <ContainerName>
            <InputName placeholder="Nome" type="text" onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </ContainerName>
          <InputLogin placeholder="Email" type="email" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          <InputLogin placeholder="Senha" type="password" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          <Button onClick={registerUser}>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
