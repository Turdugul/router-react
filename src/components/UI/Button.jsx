import React from "react";
import { styled } from "styled-components";

const Button = ({onClick}) => {
  return <MyButton onClick={onClick} >go back</MyButton>;
};

const MyButton = styled.button`
  width: 170px;
  height: 60px;
  background-color: #400fef;
  border-radius: 30px;
  border: 3px solid white;
  transform: translate(50px, 0px);
`;
export default Button;
