import styled from "styled-components";
import { darkModeVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
`;

const ToggleColor = styled.button`
  background-color: ${(props) => props.theme.bgColor};
`;

export const Login = () => {
  return (
    <div>
      <Title>Login</Title>
      <ToggleColor onClick={() => darkModeVar(true)}>To dark</ToggleColor>
      <ToggleColor onClick={() => darkModeVar(false)}>To White</ToggleColor>
    </div>
  );
};

export default Login;
