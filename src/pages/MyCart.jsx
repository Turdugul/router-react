import React from "react";
import { styled } from "styled-components";
import Button from "../components/UI/Button";
import { Navigate } from "react-router";
const MyCart = () => {

  const clickHandlerBack = () =>{
    Navigate(`/`, {
        state: "I am from cart page",
      });
  }
  return (
    <Box>
      <Container>My Cart</Container>
      {/* <button onClick={clickHandlerBack}> back</button> */}
      <Button onClick={clickHandlerBack} />
    </Box>
  );
};

export default MyCart;

const Box = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Container = styled.div`
  position: relative;
  transform: translate(40px, 30px);
  width: 1300px;
  height: 140px;
  background-color: white;
  border: 2px solid black;
`;
