import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
`;

const About = () => {
  return (
    <>
      <h1>I am about page</h1>
      <StyledNavLink to="/">Home page</StyledNavLink>
    </>
  );
};

export default About;
