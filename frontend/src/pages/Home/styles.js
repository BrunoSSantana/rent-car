import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  height: 76vh;
  width: 66vw;
  border-radius: 24px;
  background-color: ${(props) => props.theme.colors.primary};
`;
