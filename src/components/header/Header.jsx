import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import "./Header.css";

const Header = () => {
  return (
    <MyHeader>
      <MyNav>
        <StyledNavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activClass ";
            }
            return "mainClass";
          }}
          to="/"
        >
          <Logo>
            <h1>iStore</h1>
          </Logo>
        </StyledNavLink>
        <StyledNavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activClass ";
            }
            return "mainClass";
          }}
          to="/products"
        >
          <h1>Products</h1>
        </StyledNavLink>

        <StyledNavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activClass ";
            }
            return "mainClass";
          }}
          to="/mycart"
        >
          <h1>My Cart</h1>
        </StyledNavLink>

        <StyledNavLink
          className={({ isActive }) => {
            if (isActive) {
              return "mainClass activClass ";
            }
            return "mainClass";
          }}
          to="/myorders"
        >
          <h1>My Orders</h1>
        </StyledNavLink>
      </MyNav>
    </MyHeader>
  );
};
export default Header;
const MyHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #3b4dd7;
  padding: 40px;
`;
const MyNav = styled("nav")`
  display: flex;
  gap: 4rem;
  align-items: center;
  color: white;
  padding: 40px;
`;
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  h1:active {
    color: blue;
  }
  &:active,
  &:link {
    color: blue;
  }
  .activeClass {
    color: blue;
    border-bottom: 2px solid black;
  }
`;

const Logo = styled.div`
  padding-right: 550px;
`;
