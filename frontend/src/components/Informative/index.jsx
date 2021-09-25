import React, { useState } from "react";

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

  function showInformationRent() {
    return (
      <ContainerRegister>
        <Title>Alugue e Ganhe</Title>
        <Text>Alugue seu carro na plataforma</Text>
        <Button>Cadastre-se para alugar</Button>
      </ContainerRegister>
    );
  }

  function showRentalInformation() {
    return (
      <ContainerRegister>
        <Title>Solicite um Aluguel</Title>
        <Text>Realize o cadastro para o aluguel</Text>
        <Button>Cadastre-se agora</Button>
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
