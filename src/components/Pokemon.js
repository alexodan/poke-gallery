import React from "react";
import styled from "styled-components";
import TypeIcons from "./TypeIcons";
import StatPill from "./StatPill";

const StyledPokemon = styled.div`
  color: white;
`;

const Image = styled.img`
  max-width: 400px;
  max-height: 400px;
`;

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  const { id, name, height, weight, imageUrl, types, stats } = pokemon;

  return (
    <StyledPokemon>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <div>
        <div className="attributes">
          <span>Height: {height}m</span>
          <span>Weight: {weight}kg</span>
        </div>
        <Image src={imageUrl} alt={name} />
        <div>
          <TypeIcons types={types} />
          <div>
            <h2 className="stats-title">
              {stats &&
                stats.map((stat, idx) => (
                  <StatPill
                    key={idx}
                    label={stat.stat.name}
                    n={stat.base_stat}
                  />
                ))}
            </h2>
          </div>
        </div>
      </div>
    </StyledPokemon>
  );
};

export default Pokemon;
