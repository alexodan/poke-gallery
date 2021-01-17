import React from "react";
import TypeIcons from "./TypeIcons";
import StatPill from "./StatPill";
import { StyledStats } from "./styles.css";

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
