import React from "react";

const TypeIcons = (types) =>
  types &&
  types.length > 0 &&
  types.map((type, idx) => <div key={idx}>{type}</div>);

export default TypeIcons;
