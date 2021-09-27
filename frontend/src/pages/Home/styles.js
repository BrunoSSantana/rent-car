import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
`;

export const Logo = styled.img`
  width: 8%;
  max-width: 104px;
  min-width: 76px;
  margin-left: 56px;

  cursor: pointer;
`;

export const Menu = styled.nav`
  margin-right: 56px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonLogin = styled.button`
  width: 128px;
  height: 36px;
  margin-right: 32px;
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 40px;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #333333;
  }

  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  font-weight: normal;
  color: ${(props) => props.theme.colors.secondary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonRegister = styled.button`
  width: 128px;
  height: 36px;
  background-color: ${(props) => props.theme.colors.secondary};
  outline: none;
  border: none;
  border-radius: 40px;
  transition: 0.2s ease-in;

  &:hover {
    background-color: #e2e2e2;
  }

  font-size: 14px;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.ubuntu};
  color: ${(props) => props.theme.colors.primary};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
`;
