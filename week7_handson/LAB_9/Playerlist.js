import React from "react";

function Playerlist({ players }) {
  return (
    <div>
      <h3>All Players:</h3>
      <ul>
        {players.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>({item.score})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Playerlist;
