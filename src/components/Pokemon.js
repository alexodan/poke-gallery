import React from "react";
import styled from "styled-components";
import TypeIcons from "./TypeIcons";
import StatPill from "./StatPill";
import { backgroundColor } from "./theme";

const StyledContainer = styled.div`
  color: white;
  background-color: ${backgroundColor};
  max-width: 960px;
  border-radius: 20px;
  padding: 40px;
  header {
    .name {
      text-transform: capitalize;
      font-size: 2rem;
    }
  }
  main {
    display: flex;
  }
  .attributes {
    width: 27%;
  }
`;

const ImageContainer = styled.div`
  width: 43%;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
`;

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  .stats {
    h2 {
      margin: 10px 0 20px 0;
      font-size: 2rem;
    }
    .stats-pills {
      border-left: 4px solid lightgray;
      display: flex;
      flex-wrap: wrap;
      width: 50%;
      padding-left: 3px;
      .stats-pills_container {
        margin: 5px 5px 15px 10px;
      }
    }
  }
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
      </header>
      <main>
        <div className="attributes">
          <p>
            <strong>Height:</strong> {height}m
          </p>
          <p>
            <strong>Weight:</strong> {weight}kg
          </p>
        </div>
        <ImageContainer>
          <Image src={imageUrl} alt={name} />
        </ImageContainer>
        <StyledStats>
          <TypeIcons types={types} />
          <div className="stats">
            <h2>Base stats:</h2>
            <div className="stats-pills">
              {stats &&
                stats.map((stat, idx) => (
                  <div key={idx} className="stats-pills_container">
                    <StatPill label={stat.stat.name} n={stat.base_stat} />
                  </div>
                ))}
            </div>
          </div>
        </StyledStats>
      </main>
    </StyledContainer>
  );
};

export default Pokemon;
