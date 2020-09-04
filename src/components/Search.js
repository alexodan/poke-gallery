import React from "react";
import styled from "styled-components";
import { useRef } from "react";

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const InputContainer = styled.div`
  input {
    margin-right: 10px;
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #f0f0f0;
    padding: 5px;
  }
  button {
    border-radius: 5px;
    outline: none;
    border: none;
    background-color: #f0f0f0;
    padding: 5px;
  }
`;

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
