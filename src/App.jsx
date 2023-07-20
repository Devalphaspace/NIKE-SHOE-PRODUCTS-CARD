import React from "react";
import styled, { css } from "styled-components";
import nike1 from "./assets/2.png";
import nike2 from "./assets/3.png";
import nike3 from "./assets/1.png";

// ------------------- PRODUCT DATA ------------------------

const data = [
  {
    id: 1,
    image: nike1,
    title: "Nike Kiger 9",
    bg: "#e93337",
    size: "",
  },
  {
    id: 2,
    image: nike2,
    title: "Nike Winflo 10",
    bg: "#005dc3",
    size: "",
  },
  {
    id: 3,
    image: nike3,
    title: "Nike Alphafly 2",
    bg: "#9bdc28",
    size: "",
  },
];

// ------------------- PRODUCT DATA ------------------------

// ------------------- CARD COMPONENT START ------------------------

const Card = ({ prodImg, imgSize, bgColor, prodTitle }) => {
  return (
    <CardWrapper bgColor={bgColor}>
      <ImgBox className="imgBox">
        <img className="image" src={prodImg} alt="" />
      </ImgBox>
      <ContentBox className="contentBox">
        <h2>{prodTitle}</h2>
        <div className="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button>ADD TO CART</button>
      </ContentBox>
    </CardWrapper>
  );
};

// ------------------- CARD COMPONENT END ------------------------

const App = () => {
  return (
    <Container>
      {data.map((item) => (
        <Card
          key={item.id}
          prodImg={item.image}
          imgSize={""}
          bgColor={item.bg}
          prodTitle={item.title}
        />
      ))}
    </Container>
  );
};

export default App;

// ------------------ STYLED COMPONENT START -----------------------

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

const cardStyles = css`
  position: relative;
  width: 320px;
  height: 450px;
  background-color: #f1f2f6;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgColor || "#e93337"};
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in;
  }
  &:hover:before {
    clip-path: circle(300px at 80% -20%);
  }

  &:after {
    content: "NIKE";
    position: absolute;
    top: 30%;
    left: -20%;
    font-size: 10rem;
    font-weight: 800;
    font-style: italic;
    color: rgba(255, 255, 255, 0.6);
  }
  &:hover .imgBox {
    top: 0%;
    transform: translateY(0%);
  }
`;

const CardWrapper = styled.div`
  ${cardStyles}
  box-shadow: 0px 8px 15px -4px rgba(0,0,0,0.3);
  &:hover .contentBox {
    height: 210px;
  }
  &:hover .contentBox .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }
  &:hover .contentBox .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.75s;
  }
  &:hover .contentBox button {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.75s;
  }
`;

const ImgBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 100%;
  height: 220px;
  transition: 0.5s;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%) rotate(-20deg);
    width: 270px;
  }
`;

const ContentBox = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 10;

  h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #242424;
  }

  .size,
  .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    h3 {
      color: #242424;
      font-weight: 300;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-right: 10px;
    }
    span {
      width: 26px;
      height: 26px;
      text-align: center;
      line-height: 26px;
      font-size: 14px;
      display: inline-block;
      color: #fff;
      background-color: #242424;
      margin: 0 5px;
      border-radius: 4px;
      transition: 0.5s;

      &:hover {
        background-color: #444343;
      }
    }
  }
  .color {
    span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #ff0;
      color: #242424;
      margin: 0 5px;
    }
    span:nth-child(2) {
      background-color: #9bdc28;
    }
    span:nth-child(3) {
      background-color: #e93337;
    }
    span:nth-child(4) {
      background-color: #005dc3;
    }
  }

  button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #242424;
    color: #fff;
    border-radius: 4px;
    margin-top: 10px;
    cursor: pointer;
    font-weight: 600;
    opacity: 0;
    transform: translateX(50px);
    transition: 0.5s;
  }

  ${CardWrapper}:hover & {
    height: 210px;
  }

  ${CardWrapper}:hover .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  ${CardWrapper}:hover .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.75s;
  }

  ${CardWrapper}:hover button {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.75s;
  }
`;

// ------------------ STYLED COMPONENT END -----------------------
