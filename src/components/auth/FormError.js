import styled from "styled-components";

const SFormError = styled.span`
  color: tomato;
  font-weight: 600;
  font-size: 12px;
  margin: 5px 0px 5px 0;
`;

const FormError = ({ message }) => {
  return message === "" || !message ? null : <SFormError>{message}</SFormError>;
};

export default FormError;
