import React from "react";
import { useRef } from "react";
import { StyledSearch, InputContainer } from "./styles.css";

const Search = ({ searchById, searchByName }) => {
  const id = useRef(null);
  const name = useRef(null);

  return (
    <StyledSearch>
      <InputContainer>
        <input
          ref={name}
          type="text"
          name="pokemonName"
          placeholder="Search name"
        />
        <button onClick={() => searchByName(name.current)}>Go!</button>
      </InputContainer>
      <InputContainer>
        <input
          ref={id}
          type="text"
          name="pokemonName"
          placeholder="Search number"
        />
        <button onClick={() => searchById(id.current)}>Go!</button>
      </InputContainer>
    </StyledSearch>
  );
};

export default Search;
