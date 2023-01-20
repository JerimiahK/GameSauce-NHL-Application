import React, { useEffect, useState } from "react"

export default function Homepage() {
  const url = `https://statsapi.web.nhl.com/api/v1/schedule`;
  let gameID;
  let currentTeamRecords;
  let gamesArray = [];
  let teamRecords = [];
  let homeTeamName 


  
  async function getData() {
      //fetch to NHL API for current days general information on games (ie: total games)
      const recentGames = await fetch(url, {
        method: "GET",
      })
      .then(res => res.json())

      //return API information as JSON into a variable we can start extracting information from
      // const currentData = await recentGames.json();
      
      //grabs all of todays games information, including gameID's as an array of objects
      const games = recentGames.dates[0].games;

      //creates a new array of the games, but only with the information we need
      for (let g of games) {
        //puts just the id and status of todays games into a gamesArray
        gamesArray.push({
          id: g.gamePk,
          status: g.status.detailedState,
        });
        //puts the home and away team records into an array
        teamRecords.push({
          id: g.gamePk,
          homeWins: g.teams.home.leagueRecord.wins,
          homeLosses: g.teams.home.leagueRecord.losses,
          homeTies: g.teams.home.leagueRecord.ot,
          awayWins: g.teams.away.leagueRecord.wins,
          awayLosses: g.teams.away.leagueRecord.losses,
          awayTies: g.teams.away.leagueRecord.ot,
        });
      }

      //filters out an array of the games that are scheduled
      const scheduled = gamesArray.filter(
        (status) => status.status === "Scheduled"
      );

      //filters out an array of the games that are in progress
      const inProgress = gamesArray.filter(
        (status) => status.status === "In Progress"
      );

      //filters out an array of the games that are finished
      const final = gamesArray.filter((status) => status.status === "Final");

      // creates a function that contains logic to display the most current game to be played, being played, or the last game of the night that finished
      const gameIDScheduled = function () {
        if (gamesArray[0].status === "Scheduled") {
          gameID = scheduled[0].id;
        } else if (gamesArray[0].status === "In Progress") {
          gameID = inProgress.pop().id;
        } else if (gamesArray.at(-1).status === "Final") {
          gameID = final.pop().id;
        }
      };
      // console.log(inProgress);

      //calls the gameIDStatus function to determine what the most current game ID is based on the games status'
      gameIDScheduled();
      //creates a for loop to find the the current teams records based on comparing the gameID with the teams record ID
      for (let r of teamRecords) {
        if (gameID === r.id) {
          currentTeamRecords = {
            homeWins: r.homeWins,
            homeLosses: r.homeLosses,
            homeTies: r.homeTies,
            awayWins: r.awayWins,
            awayLosses: r.awayLosses,
            awayTies: r.awayTies,
          };
        }
      }

      //creates a variable containing the URL for the NHL API to get the most current game feed stats using the gameID
      const box = `https://statsapi.web.nhl.com/api/v1/game/${gameID}/feed/live`;

      //fetches the most current games stats information
      const liveGameFetch = await fetch(box, {
        method: "GET",
      });

      //puts the live game data into a json format inside of variable
      const liveData = await liveGameFetch.json();
      // console.log(liveData);
      //grab all the information i need to send to HB

      homeTeamName = liveData.liveData.boxscore.teams.away.team.name;
      console.log(homeTeamName);
  
  }

  getData();
  // console.log(homeTeamName);
  return (
    <div className="currentGameBox">
      <div className="currentGameHeader">
        <div className="headerRow">
          <div className="col-5 headerColumn">
            <h6 className="headerTeam">{getData().homeTeamName}</h6>
            <p className="teamRecord">13-23-5</p>
            <h1 className="headerScore">0</h1>
          </div>
          <div>
            <p className="headerPeriod">1st Period</p>
            <p className="headerTime">20:00</p>
          </div>
          <div className="col-5 headerColumn">
            <h6 className="headerTeam">Colorado Avalanche</h6>
            <p className="teamRecord">21-17-4</p>
            <h1 className="headerScore">0</h1>
          </div>
        </div>
      </div>
      <div id="statsColumn" className="container text-center">
        <div className="currentRow">
          <div className="column">
            <p className="staticValue">S.O.G:</p>
            <p className="liveStat">0</p>
          </div>
          <div className="column">
            <p className="staticValue">S.O.G:</p>
            <p className="liveStat">0</p>
          </div>
        </div>
        <div className="currentRow">
          <div className="column">
            <p className="staticValue">Faceoff Win %</p>
            <p className="liveStat">0%</p>
          </div>
          <div className="column">
            <p className="staticValue">Faceoff Win %</p>
            <p className="liveStat">0%</p>
          </div>
        </div>
        <div className="currentRow">
          <div className="column">
            <p className="staticValue">Hits</p>
            <p className="liveStat">0</p>
          </div>
          <div className="column">
            <p className="staticValue">Hits</p>
            <p className="liveStat">0</p>
          </div>
        </div>
        <div className="currentRow">
          <div className="column">
            <p className="staticValue">PIM</p>
            <p className="liveStat">0</p>
          </div>
          <div className="column">
            <p className="staticValue">PIM</p>
            <p className="liveStat">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
