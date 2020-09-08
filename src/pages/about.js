import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import { Button } from "../components/Button";

const StyledNavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.color};
`;

const IamGoodButton = () => {
  const handleOnClick = () => {
    console.log("I am good");
  };
  return <Button handleOnClick={handleOnClick}>I am good button</Button>;
};

const IamBadButton = () => {
  const handleOnClick = () => {
    console.log("I am bad");
  };
  return <Button handleOnClick={handleOnClick}>I am good bad</Button>;
};

const About = () => {
  return (
    <>
      <h1>I am about page</h1>
      <IamGoodButton />
      <IamBadButton />
      <br />
      <StyledNavLink to="/">Home page</StyledNavLink>
    </>
  );
};

export default About;
