import React from "react";
function Listofindianplayer({ IndianPlayers }) {
  return (
    <div>
      <ul>
        {IndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listofindianplayer;
