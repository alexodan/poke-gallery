import React from "react";
import styled from "styled-components";
import TypeIcons from "./TypeIcons";
import StatPill from "./StatPill";

const StyledPokemon = styled.div``;

const Pokemon = ({ id, name, height, weight, imageUrl, types, stats }) => {
  console.log(id, name, height, weight, imageUrl, types, stats);
  return (
    <StyledPokemon>
      <h3>{id}</h3>
      <h2>{name}</h2>
      <div>
        <div className="attributes">
          <span>Height: {height}m</span>
          <span>Weight: {weight}kg</span>
        </div>
        <img src={imageUrl} alt={name} />
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
