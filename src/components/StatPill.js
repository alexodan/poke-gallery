import React from "react";
import styled from "styled-components";

const StyledStatPill = styled.div`
  background-color: #fafafa;
  color: #606060;
  border-radius: 5px;
  padding: 5px;
  font-size: 10px;
  display: inline;
  font-weight: bold;
`;

const labels = {
  hp: "HP",
  attack: "ATTACK",
  defense: "DEFENSE",
  "special-attack": "SP. ATTACK",
  "special-defense": "SP. DEFENSE",
  speed: "SPEED",
};

const StatPill = ({ label, n }) => {
  return (
    <StyledStatPill>
      {labels[label]}: {n}
    </StyledStatPill>
  );
};

export default StatPill;
