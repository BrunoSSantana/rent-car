import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const Content = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 16px;
`;

export const Input = styled.input`
  height: 40px;
  padding-left: 12px;

  outline: none;
  border: none;
  background-color: #eeeeee;
  color: #7a7a7a;

  margin-top: 8px;
`;

export const Button = styled.button`
  height: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  outline: none;
  border: none;

  font-size: 16px;
  font-weight: 800;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 8px;

  &:hover {
    background-color: #333333;
  }
`;
