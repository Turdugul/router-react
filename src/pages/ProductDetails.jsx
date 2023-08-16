import React from "react";
import { Navigate, useLocation, useParams } from "react-router";
import { DUMMY_PRODUCTS } from "./Products";
import Button from "../components/UI/Button";
import { styled } from "styled-components";

const ProductDetails = () => {
  const location = useLocation();
  console.log(location, "loc");

  const params = useParams();
  console.log(params.productId, "param");
  const productId = params.productId;

  const currentProduct = DUMMY_PRODUCTS.find(
    (product) => product.id === productId
  );
  console.log(currentProduct, "current product");

  if (!currentProduct) {
    return <Navigate to={"/products"} />;
  }
  return (
    <Block>
      <ImageBox>
        <img src={currentProduct.image} alt={currentProduct.title} />
      </ImageBox>
      <TitleBox>
        <Button />
        <h2>{currentProduct.title}</h2>
        <h3>Price: {currentProduct.price} $</h3>
        <p>{currentProduct.description}</p>
      </TitleBox>
    </Block>
  );
};
const Block = styled.div`
  position: relative;
  transform: translate(-10px, 20px);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 0.1rem;
  padding-left: 40px;
`;
const ImageBox = styled.div`
  margin: 20px;
  width: 250px;
  height: 320px;
  
  background-color: #f5f5e6;
  & > img {
    width: 220px;
    height: 300px;
  }
`;
const TitleBox = styled.div`
 position: relative;
  transform: translate(-10px, 30px);
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 0.6rem;
`;
export default ProductDetails;
