import React from "react";
import styled from "styled-components";

const StyledStatPill = styled.div`
  background-color: "#FAFAFA";
  color: "#A0A0A0";
  border-radius: 5px;
  padding: 5px;
`;

const StatPill = ({ label, n }) => {
  return (
    <StyledStatPill>
      {label}: {n}
    </StyledStatPill>
  );
};

export default StatPill;
