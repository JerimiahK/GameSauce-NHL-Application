import React, { useEffect, useState } from "react";

export default function GamesCard() {
  const url = `http://statsapi.web.nhl.com/api/v1/schedule`;

  const [awayTeam, setAwayTeam] = useState();
  const [awayScore, setAwayScore] = useState();
  const [homeTeam, setHomeTeam] = useState();
  const [homeScore, setHomeScore] = useState();

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

    const boxAwayTeam = gamesArray.awayName
    setAwayTeam(boxAwayTeam)

    const boxAwayScore = gamesArray.awayScore
    setAwayScore(boxAwayScore);

    const boxHomeTeam = gamesArray.homeName
    setHomeTeam(boxHomeTeam);

    const boxHomeScore = gamesArray.homeScore
    setHomeScore(boxHomeScore);
  }

  useEffect(() => {
    getData();
  }, []);

  // router.get("/game/:id", async (req, res) => {
  //   let currentTeamRecords;
  //   let teamRecords = [];
  //   let gameID;

  //     const todaysGames = await fetch(url, {
  //       method: "GET",
  //     });

  //     const currentData = await todaysGames.json();

  //     const allGames = currentData.dates[0].games;

  //     for (let g of allGames) {
  //       teamRecords.push({
  //         id: g.gamePk,
  //         homeWins: g.teams.home.leagueRecord.wins,
  //         homeLosses: g.teams.home.leagueRecord.losses,
  //         homeTies: g.teams.home.leagueRecord.ot,
  //         awayWins: g.teams.away.leagueRecord.wins,
  //         awayLosses: g.teams.away.leagueRecord.losses,
  //         awayTies: g.teams.away.leagueRecord.ot,
  //       });
  //     }

  //     gameID = req.params.id;

  //     for (let r of teamRecords) {
  //       if (gameID == r.id) {
  //         currentTeamRecords = {
  //           homeWins: r.homeWins,
  //           homeLosses: r.homeLosses,
  //           homeTies: r.homeTies,
  //           awayWins: r.awayWins,
  //           awayLosses: r.awayLosses,
  //           awayTies: r.awayTies,
  //         };
  //       }
  //     }

  //     const box = `https://statsapi.web.nhl.com/api/v1/game/${gameID}/feed/live`;

  //     const gameFetch = await fetch(box, {
  //       method: "GET",
  //     });

  //     const liveData = await gameFetch.json();

  return (
    <div id="allGamesBox" className="container">
      <div className="allGamesTeamsBox">
        <div id="allGamesAway" className="allGamesRow">
          <p>{awayTeam}</p>
          <p className="gameScore">{awayScore}</p>
        </div>
        <div id="allGamesHome" className="allGamesRow">
          <p>{homeTeam}</p>
          <p className="gameScore">{homeScore}</p>
        </div>
      </div>
      <p className="gameStatus">Scheduled</p>
    </div>
  );
}
