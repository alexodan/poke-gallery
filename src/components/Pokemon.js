import React from "react";
import styled from "styled-components";
import { backgroundColor } from "./theme";
import Stats from "./Stats";

const StyledContainer = styled.div`
  color: white;
  background-color: ${backgroundColor};
  max-width: 960px;
  border-radius: 20px;
  padding: 40px;
  position: relative;
  header {
    position: absolute;
    top: 100px;
    left: 50px;
    .name {
      text-transform: capitalize;
      font-size: 2rem;
    }
    .attributes {
      width: 27%;
    }
  }
  main {
    display: flex;
  }
`;

const ImageContainer = styled.div`
  width: 70%;
  margin: 0 5%;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
  min-width: 270px;
  width: 65%;
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
    <StyledContainer>
      <header>
        <h3>{id}</h3>
        <h2 className="name">{name}</h2>
        <StyledJapName>{japName}</StyledJapName>
        <div className="attributes">
          <p>Height: {height}m</p>
          <p>Weight: {weight}kg</p>
        </div>
      </header>
      <main>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <Stats types={types} stats={stats} />
      </main>
    </StyledContainer>
  );
};

export default Pokemon;
