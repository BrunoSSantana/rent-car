import React, { useState } from "react";
import { useHistory } from "react-router";

import {
  Button,
  Container,
  ContainerRegister,
  ButtonRent,
  ContainerSelect,
  Icon,
  Main,
  Text,
  Title,
} from "./styles";

import car from "../../assets/car.svg";
import road from "../../assets/road.svg";

const Informative = () => {
  const [page, setPage] = useState(0);
  const [colorRent, setColorRent] = useState("#000");
  const [colorRenting, setColorRenting] = useState("#fff");
  const history = useHistory();

  function showInformationRent() {
    return (
      <ContainerRegister>
        <Title>Alugue e Ganhe</Title>
        <Text>Alugue seu carro na plataforma</Text>
        <Button onClick={() => registerUser()}>Cadastre-se para alugar</Button>
      </ContainerRegister>
    );
  }

  function showRentalInformation() {
    return (
      <ContainerRegister>
        <Title>Solicite um Aluguel</Title>
        <Text>Realize o cadastro para o aluguel</Text>
        <Button onClick={() => registerClient()}>Cadastre-se agora</Button>
      </ContainerRegister>
    );
  }

  function increase() {
    setColorRenting("#000");
    setColorRent("#fff");
    setPage(1);
  }

  function reset() {
    setColorRent("#000");
    setColorRenting("#fff");
    setPage(0);
  }

  function renderPage() {
    if (page === 0) {
      return showInformationRent();
    } else {
      return showRentalInformation();
    }
  }

  function registerUser() {
    history.push("/register/user");
  }

  function registerClient() {
    history.push("/register/client");
  }

  return (
    <Main>
      <Container>
        <ContainerSelect>
          <ButtonRent
            onClick={() => reset()}
            theme={{ border: `${colorRent}` }}
          >
            <Icon src={car} />
            Alugue seu carro
          </ButtonRent>
          <ButtonRent
            onClick={() => increase()}
            theme={{ border: `${colorRenting}` }}
          >
            <Icon src={road} />
            Faça um aluguel
          </ButtonRent>
        </ContainerSelect>
        {renderPage()}
      </Container>
    </Main>
  );
};

export default Informative;
