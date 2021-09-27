import React, { useState } from "react";

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
import { ContainerLogin, Informative } from "../../components";

export default function Home() {
  const [page, setPage] = useState(0);

  function showInformative() {
    return <Informative />;
  }

  function showContainerLogin() {
    return <ContainerLogin />;
  }

  function increase(number) {
    setPage(number);
  }

  function reset() {
    setPage(0);
  }

  function renderPage() {
    if (page === 0) {
      return showInformative();
    } else if (page === 1) {
      return showContainerLogin();
    }
  }

  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="Logo RentCar" onClick={() => reset()} />
        <Menu>
          <ButtonLogin onClick={() => increase(1)}>
            <Icon src={user} />
            Fazer Login
          </ButtonLogin>
          <ButtonRegister>Cadastre-se</ButtonRegister>
        </Menu>
      </Header>
      {renderPage()}
    </Wrapper>
  );
}
