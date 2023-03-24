import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Games() {
    const url = `https://statsapi.web.nhl.com/api/v1/schedule`;
    const [games, setTodaysGames] = useState();

    useEffect(() => {
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

            const todaysGames = gamesArray;
            setTodaysGames(todaysGames);
            console.log(allGames[0].link);
        }
        getData();
    }, [url]);

    return (
        <>
            {games?.map((game) => (
                <div className="gameBoxContainer">
                    <Link className="allGamesLink" to={`/game/${game.id}`}>
                        {game.status === "Final" ? (
                            <div id="allGamesBoxFinal" className="container">
                                <div id="allGamesAway" className="allGamesRow">
                                    <p>{game.awayName}</p>
                                    <p className="gameScore">
                                        {game.awayScore}
                                    </p>
                                </div>
                                <div id="allGamesHome" className="allGamesRow">
                                    <p>{game.homeName}</p>
                                    <p className="gameScore">
                                        {game.homeScore}
                                    </p>
                                </div>
                                <h5>Final</h5>
                            </div>
                        ) : (
                            <div id="allGamesBox" className="container">
                                <div id="allGamesAway" className="allGamesRow">
                                    <p>{game.awayName}</p>
                                    <p className="gameScore">
                                        {game.awayScore}
                                    </p>
                                </div>
                                <div id="allGamesHome" className="allGamesRow">
                                    <p>{game.homeName}</p>
                                    <p className="gameScore">
                                        {game.homeScore}
                                    </p>
                                </div>
                            </div>
                        )}
                    </Link>
                </div>
            ))}
        </>
    );
}
