import styled from "styled-components";

export const Main = styled.div`
  /* background-color: grey; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  width: 496px;
  height: 368px;
`;

export const ContainerSelect = styled.div`
  /* background-color: aqua; */
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 1px solid #e8e8e8;
`;

export const ButtonRent = styled.a`
  /* background-color: aquamarine; */
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  outline: none;
  cursor: pointer;

  font-size: 14px;
  font-family: Ubuntu, sans-serif;
  color: #000;

  border-bottom: 5px solid ${(props) => props.theme.border};
`;

export const Icon = styled.img`
  margin-bottom: 8px;
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};

  margin-bottom: 16px;
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};

  margin-bottom: 24px;
`;

export const Button = styled.button`
  width: 200px;
  height: 56px;

  background-color: ${(props) => props.theme.colors.primary};
  outline: none;
  border: none;

  font-size: 14px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.secondary};
  transition: 0.2s ease-in;

  &:hover {
    background-color: #333333;
  }
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;

  margin-left: 72px;
`;
