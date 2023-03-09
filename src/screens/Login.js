import { useState } from "react";
import styled, { css } from "styled-components";
import { isLoggedInVar } from "../apollo";

const Title = styled.h1`
  color: ${(props) => (props.potato ? "palevioletred" : "beige")};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  ${(props) =>
    props.potato
      ? css`
          font-size: 49px;
        `
      : css`
          text-decoration: underline;
        `}
`;

const ToggleColor = styled.button`
  color: red;
`;

export const Login = () => {
  const [potato, setPotato] = useState(false);
  const togglePotato = () => setPotato((current) => !current);
  return (
    <div>
      <Title potato={potato}>Login</Title>
      <button onClick={() => isLoggedInVar(true)}>Login Now!!</button>
      <ToggleColor onClick={togglePotato}>Toggle Potato</ToggleColor>
    </div>
  );
};

export default Login;
