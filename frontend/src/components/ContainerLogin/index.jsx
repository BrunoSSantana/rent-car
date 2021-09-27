import React from "react";

import { ButtonLogin, Container, Icon, Main } from "./styles";
import arrow from "../../assets/arrowRight.svg";

const ContainerLogin = () => {
  return (
    <Main>
      <Container>
        <ButtonLogin>
          Faça login para alugar seu carro
          <Icon src={arrow} />
        </ButtonLogin>
        <ButtonLogin>
          Faça login para o aluguel
          <Icon src={arrow} />
        </ButtonLogin>
      </Container>
    </Main>
  );
};

export default ContainerLogin;
