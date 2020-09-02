import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Search = ({ searchById, searchByName }) => {
  const id = useRef(null);
  const name = useRef(null);

  return (
    <StyledSearch>
      <div>
        <input
          ref={name}
          type="text"
          name="pokemonName"
          placeholder="Search name"
        />
        <button onClick={() => searchByName(name.current)}>Go!</button>
      </div>
      <div>
        <input
          ref={id}
          type="text"
          name="pokemonName"
          placeholder="Search number"
        />
        <button onClick={() => searchById(id.current)}>Go!</button>
      </div>
    </StyledSearch>
  );
};

export default Search;
