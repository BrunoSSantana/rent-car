import styled from "styled-components";

export const Main = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Container = styled.div`
  width: 100vw;

  display: flex;
  justify-content: space-around;
`;

export const ButtonLogin = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;

  outline: none;
  cursor: pointer;

  font-size: 28px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};

  transition: 0.2s ease-in;

  &:hover {
    color: #545454;
  }
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;

  margin-left: 24px;
`;
