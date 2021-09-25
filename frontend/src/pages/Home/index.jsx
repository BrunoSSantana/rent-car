import React from "react";

import {
  Wrapper,
  Header,
  Logo,
  Menu,
  ButtonLogin,
  ButtonRegister,
  Icon,
} from "./styles";

import logo from "../../assets/RentCar.svg";
import user from "../../assets/user.svg";

export default function Home() {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="Logo RentCar" />
        <Menu>
          <ButtonLogin>
            <Icon src={user} />
            Fazer Login
          </ButtonLogin>
          <ButtonRegister>Cadastre-se</ButtonRegister>
        </Menu>
      </Header>
    </Wrapper>
  );
}
