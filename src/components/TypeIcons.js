import React from "react";
import styled from "styled-components";

const StyledTypeIcons = styled.div`
  display: flex;
`;

const TypeIcons = (types) => (
  <StyledTypeIcons>
    {types &&
      types.length > 0 &&
      types.map((type, idx) => <div key={idx}>{type}</div>)}
  </StyledTypeIcons>
);

export default TypeIcons;
