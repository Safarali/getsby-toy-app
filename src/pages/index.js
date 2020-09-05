import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledHeading = styled.h1`
  font-size: 2.4rem;
  color: ${props => props.theme.color};
`;

export default function Home() {
  return (
    <>
      <StyledHeading>I am home page</StyledHeading>
      <Link to="/about">About page</Link>
    </>
  );
}
