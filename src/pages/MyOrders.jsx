import React from "react";
import { styled } from "styled-components";
import Button from "../components/UI/Button";
import { Navigate } from "react-router";

const MyOrders = () => {
  const clickHandlerBack = () => {
    return <Navigate to={"/"} />;
  
  };
  return (
    <Box>
      <Container>My Orders</Container>
      <Button onClick={clickHandlerBack} />
    </Box>
  );
};

export default MyOrders;
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
