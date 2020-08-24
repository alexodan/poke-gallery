import React from "react";
import styled from "styled-components";
import Stats from "./Stats";

const Header = styled.header`
  position: absolute;
  top: 40px;
  left: 50px;
  .name {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .attributes {
    width: 27%;
  }
`;

const Main = styled.main`
  display: flex;
`;

const ImageContainer = styled.div`
  width: 70%;
  margin: 0 10% 0 5%;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  min-width: 270px;
  width: 55%;
`;

const StyledJapName = styled.h2`
  opacity: 0.25;
  color: black;
  font-size: 6rem;
  font-weight: bold;
`;

const Pokemon = ({ pokemon = {} }) => {
  const { id, name, height, weight, imageUrl, types, stats, japName } = pokemon;
  return (
    <>
      <Header>
        <h3>{id}</h3>
        <h2 className="name">{name}</h2>
        <StyledJapName>{japName}</StyledJapName>
        <div className="attributes">
          <p>Height: {height}m</p>
          <p>Weight: {weight}kg</p>
        </div>
      </Header>
      <Main>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <Stats types={types} stats={stats} />
      </Main>
    </>
  );
};

export default Pokemon;
