import React, { useEffect, useState } from "react";
import GamesCard from "./GamesCard";

export default function Games() {
  const url = `http://statsapi.web.nhl.com/api/v1/schedule`;

  async function getData() {
    const currentData = await fetch(url, {
      method: "GET",
    }).then((res) => res.json());

    const allGames = currentData.dates[0].games;

    let gamesArray = [];

    for (let g of allGames) {
      gamesArray.push({
        id: g.gamePk,
        homeName: g.teams.home.team.name,
        homeScore: g.teams.home.score,
        awayName: g.teams.away.team.name,
        awayScore: g.teams.away.score,
        status: g.status.detailedState,
      });
    }

    const todaysGames = gamesArray
    console.log(todaysGames);
  }

   useEffect(() => {
     getData();
   }, []);

  return (
    <div id="allGames" className="currentGameBox">
      {}
    </div>
  );
}
