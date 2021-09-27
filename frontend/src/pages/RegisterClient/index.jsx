import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router";

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

export default function RegisterClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  async function registerClient() {
    try {
      await Axios.post("http://localhost:3003/clients/new", {
        name,
        email,
        password,
        tel: phone,
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
        <Title>Que tal ter um carro para viajar</Title>
        <Container>
          <ContainerName>
            <InputName
              placeholder="Nome"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </ContainerName>
          <InputLogin
            placeholder="Telefone"
            type="tel"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <InputLogin
            placeholder="Email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <InputLogin
            placeholder="Senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button onClick={registerClient}>Cadastrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
