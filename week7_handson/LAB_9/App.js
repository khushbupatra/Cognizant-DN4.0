import React from "react";
import ListofPlayers from "./components/Playerlist";
import Scorebelow70 from "./components/Scorelow";
import { Oddplayer } from "./components/Oddplayer";
import { Evenplayer } from "./components/Evenplayer";
import ListofIndianplayer from "./components/Listofindianplayer";
import { Player } from "./components/Player";

const T20Players = ['First Player', 'Second Player', 'Third Player'];
const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

function App() {
  const flag = true;

  return (
    <div className="App">
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={Player} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={Player} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          <Oddplayer players={IndianPlayers} />
          <hr />
          <h2>Even Players</h2>
          <Evenplayer players={IndianPlayers} />
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListofIndianplayer IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;
