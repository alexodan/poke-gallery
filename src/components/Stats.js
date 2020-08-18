import React from "react";
import styled from "styled-components";
import TypeIcons from "./TypeIcons";
import StatPill from "./StatPill";

const StyledStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  .stats {
    h2 {
      margin: 10px 0 20px 0;
      font-size: 2rem;
    }
    .stats-pills {
      border-left: 4px solid lightgray;
      display: flex;
      flex-wrap: wrap;
      padding-left: 3px;
      .stats-pills_container {
        margin: 5px 5px 15px 10px;
      }
    }
  }
`;

const Stats = ({ types, stats }) => {
  return (
    <StyledStats>
      <TypeIcons types={types} />
      <div className="stats">
        <h2>Base stats:</h2>
        <div className="stats-pills">
          {stats &&
            stats.map((stat, idx) => (
              <div key={idx} className="stats-pills_container">
                <StatPill label={stat.stat.name} n={stat.base_stat} />
              </div>
            ))}
        </div>
      </div>
    </StyledStats>
  );
};

export default Stats;
