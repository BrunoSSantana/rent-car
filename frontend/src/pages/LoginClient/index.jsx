import React from "react";
import { Container, Content, Input, Title, Wrapper, Button } from "./styles";

export default function LoginClient() {
  return (
    <Wrapper>
      <Content>
        <Title>Que tal ter um carro para viajar</Title>
        <Container>
          <Input placeholder="Email" type="email" />
          <Input placeholder="Senha" type="password" />
          <Button>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
