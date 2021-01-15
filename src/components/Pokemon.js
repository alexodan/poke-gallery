import React from "react";
import Stats from "./Stats";
import {
  StyledContainer,
  Header,
  Main,
  ImageContainer,
  Image,
  StyledJapName,
} from "./Pokemon.css";

const Pokemon = ({ pokemon = {}, children }) => {
  const { id, name, height, weight, imageUrl, types, stats, japName } = pokemon;

  return (
    <StyledContainer types={types}>
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
      {children}
    </StyledContainer>
  );
};

export default Pokemon;
