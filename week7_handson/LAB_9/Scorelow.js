import React from "react";

function Scorelow({ players }) {
  const filtered = players.filter((item) => item.score <= 70);

  return (
    <div>
      <h3>Players Scoring Below 70:</h3>
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Scorelow;
