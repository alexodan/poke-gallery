import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Search = () => {
  return (
    <StyledSearch>
      <div>
        <input type="text" name="pokemonName" placeholder="Search name" />
        <button>Go!</button>
      </div>
      <div>
        <input type="text" name="pokemonName" placeholder="Search number" />
        <button>Go!</button>
      </div>
    </StyledSearch>
  );
};

export default Search;
