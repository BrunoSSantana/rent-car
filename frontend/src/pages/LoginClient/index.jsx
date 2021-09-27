import React from "react";
import { Container, Content, Input, Title, Wrapper, Button } from "./styles";
import Axios from 'axios'
import { useHistory } from "react-router";
import { useState } from "react/cjs/react.development";


export default function LoginClient() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function loginClient() {
    try {
      await Axios.post("http://localhost:3003/clients/auth", {
        email,
        password
      }).then((response) => {
        console.log(response);
        localStorage.setItem('token', response.data)
        history.push("/client");
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
          <Input placeholder="Email" type="email" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          <Input placeholder="Senha" type="password" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          <Button onClick={loginClient}>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
