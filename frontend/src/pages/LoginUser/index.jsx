import React from "react";
import { Container, Content, Input, Title, Wrapper, Button } from "./styles";

export default function LoginUser() {
  return (
    <Wrapper>
      <Content>
        <Title>Alugue seu carro com a RentCar</Title>
        <Container>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
