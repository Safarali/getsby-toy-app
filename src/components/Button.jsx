import React from "react";
import styled from "styled-components";

const ButtonBase = styled.button`
  background-color: red;
`;

export const Button = ({ children, handleOnClick }) => {
  return <ButtonBase onClick={handleOnClick}>{children}</ButtonBase>;
};

const Image = styled.img`
  width: 200px;
  height: auto;
`;
