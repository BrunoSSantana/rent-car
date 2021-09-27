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

export default function RegisterClient() {
  return (
    <Wrapper>
      <Content>
        <Title>Que tal ter um carro para viajar</Title>
        <Container>
          <ContainerName>
            <InputName placeholder="Nome" type="text" />
            <InputLastName placeholder="Sobrenome" type="text" />
          </ContainerName>
          <InputLogin placeholder="Telefone" type="tel" />
          <InputLogin placeholder="Email" type="email" />
          <InputLogin placeholder="Senha" type="password" />
          <Button>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
