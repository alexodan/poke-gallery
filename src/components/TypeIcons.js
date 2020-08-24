import React from "react";
import styled from "styled-components";

const StyledTypeIcons = styled.div`
  display: flex;
  img {
    width: 75px;
  }
`;

const TypeIcons = ({ types }) => {
  if (!types || types.length < 1) return null;
  console.log(types);
  return (
    <StyledTypeIcons>
      {types.map((type, idx) => (
        <img key={idx} src={`/icons/${type}@2x.png`} alt={type} />
      ))}
    </StyledTypeIcons>
  );
};

export default TypeIcons;
