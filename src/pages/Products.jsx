import React from "react";
import { useNavigate } from "react-router";
import { styled } from "styled-components";
import Button from "../components/UI/Button";

export const DUMMY_PRODUCTS = [
  {
    title: "iPhone 13",
    price: 1320,
    id: "e3fpso1m",
    description:
      "Apple iPhone 13 with Pro camera system and improved battery life. iPhone 13 colours - Pink, Midnight, Starlight, Blue, (PRODUCT)RED and Green.",
    image:
      "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-13-pro-max/Carousel/sierrablue/6196D-2.png",
  },
  {
    title: "iPhone 14",
    price: 1450,
    id: "e3fpso1m",
    description:
      "Apple iPhone 13 with Pro camera system and improved battery life. iPhone 13 colours - Pink, Midnight, Starlight, Blue, (PRODUCT)RED and Green.",
    image:
      "https://www.notebookcheck.net/fileadmin/_processed_/1/a/csm_iphone_14_pro_ldvova_8_34cf25194d.jpg",
  },
  {
    title: "iPhone 12",
    price: 107700,
    id: "e3fpso1m",
    description:
      "Apple iPhone 13 with Pro camera system and improved battery life. iPhone 13 colours - Pink, Midnight, Starlight, Blue, (PRODUCT)RED and Green.",
    image:
      "https://cdn.dxomark.com/wp-content/uploads/medias/post-61584/iphone-12-pro-max-graphite-hero.jpg",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const clickHandlerBack = () =>{
    return navigate(`/`, {
        state: "I am from products page",
      });
  }
  const clickHandler = (phoneId) => {
    return  navigate(`/products/${phoneId}`, {
      state: "I am from products page",
      replace: false,
    });
  };
  return (
    <Container>
      <Block>
        {DUMMY_PRODUCTS.map((phone) => {
          return (
            <CartCont key={phone.id} onClick={() => clickHandler(phone.id)}>
              <ImageBox>
                <img src={phone.image} />
              </ImageBox>
              <div>
                <h3>{phone.title}</h3>
                <b style={{ color: "grey" }}>{phone.price}</b>
              </div>
            </CartCont>
          );
        })}
      </Block>
      <Button onClick={clickHandlerBack} />
    </Container>
  );
};
const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction:column;
  gap:4rem;
`;
const Block = styled.div`
  position: relative;
  transform: translate(0px, 40px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
`;
const CartCont = styled.div`
  padding: 10px;
  width: 300px;
  height: 450px;
  background-color: #f5eded;
  border-radius: 20px;
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
export default Products;
