import React from "react";
import { useHistory } from "react-router";

import { ButtonLogin, Container, Icon, Main } from "./styles";
import arrow from "../../assets/arrowRight.svg";

const ContainerLogin = () => {
  const history = useHistory();

  function loginUser() {
    history.push("/login/user");
  }

  function loginClient() {
    history.push("/login/client");
  }

  return (
    <Main>
      <Container>
        <ButtonLogin onClick={() => loginUser()}>
          Faça login para alugar seu carro
          <Icon src={arrow} />
        </ButtonLogin>
        <ButtonLogin onClick={() => loginClient()}>
          Faça login para o aluguel
          <Icon src={arrow} />
        </ButtonLogin>
      </Container>
    </Main>
  );
};

export default ContainerLogin;
