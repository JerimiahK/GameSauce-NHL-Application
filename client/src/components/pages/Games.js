export default function Games() {
    return (
      <div id="currentGame" class="currentGame">
        <div id="allGames" class="currentGameBox">
          <h2 id="todayGameText">Today's Games</h2>
            <div id="allGamesBox" class="container">
              <div class="allGamesTeamsBox">
                <div id="allGamesAway" class="allGamesRow">
                  <p>Anaheim Ducks</p>
                  <p class="gameScore">0</p>
                </div>
                <div id="allGamesHome" class="allGamesRow">
                  <p>Colorado Avalanche</p>
                  <p class="gameScore">2</p>
                </div>
              </div>
              <p class="gameStatus">Scheduled</p>
            </div>
        </div>
      </div>
    );
}