import React from "react";

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
  return (
    <Wrapper>
      <Content>
        <Title>Alugue seu carro com a RentCar</Title>
        <Container>
          <ContainerName>
            <InputName placeholder="Nome" type="text" />
            <InputLastName placeholder="Sobrenome" type="text" />
          </ContainerName>
          <InputLogin placeholder="Email" type="email" />
          <InputLogin placeholder="Senha" type="password" />
          <Button>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
