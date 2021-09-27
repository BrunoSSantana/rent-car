import React, { useState } from "react";
import { Container, Content, Input, Title, Wrapper, Button } from "./styles";
import Axios from 'axios'
import { useHistory } from "react-router";

export default function LoginUser() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function loginUser() {
    try {
      await Axios.post("http://localhost:3003/users/auth", {
        email,
        password
      }).then((response) => {
        if(response.data.message){
          return alert('Credenciais inválidas')
        }
        console.log(response);
        localStorage.setItem('token', response.data)
        history.push("/user");
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
          <Input placeholder="Email" type="email" onChange={(e)=>{
              setEmail(e.target.value)
            }}/>
          <Input placeholder="Senha" type="password" onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          <Button onClick={loginUser}>Entrar</Button>
        </Container>
      </Content>
    </Wrapper>
  );
}
