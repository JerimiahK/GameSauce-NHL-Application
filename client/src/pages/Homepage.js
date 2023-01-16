export default function Homepage() {
  <div class="currentGameBox">
    <div class="currentGameHeader">
      <h5 class="currentGameText">Most Current Game</h5>
      <div class="headerContainer">
        <div class="headerRow">
          <div class="col-5 headerColumn">
            <h6 class="headerTeam">Anaheim Ducks</h6>
            <p class="teamRecord">13-23-5</p>
            <h1 class="headerScore">0</h1>
          </div>
          <div>
            <p class="headerPeriod">1st Period</p>
            <p class="headerTime">20:00</p>
          </div>
          <div class="col-5 headerColumn">
            <h6 class="headerTeam">Colorado Avalanche</h6>
            <p class="teamRecord">21-17-4</p>
            <h1 class="headerScore">0</h1>
          </div>
        </div>
      </div>
    </div>
    <div id="statsColumn" class="container text-center">
      <div class="row">
        <div class="col-6 columnLeft">
          <p class="staticValue">S.O.G:</p>
          <p class="liveStat">0</p>
        </div>
        <div class="col-6 columnRight">
          <p class="staticValue">S.O.G:</p>
          <p class="liveStat">0</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 columnLeft">
          <p class="staticValue">Faceoff Win %</p>
          <p class="liveStat">0%</p>
        </div>
        <div class="col-6 columnRight">
          <p class="staticValue">Faceoff Win %</p>
          <p class="liveStat">0%</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6 columnLeft">
          <p class="staticValue">Hits</p>
          <p class="liveStat">0</p>
        </div>
        <div class="col-6 columnRight">
          <p class="staticValue">Hits</p>
          <p class="liveStat">0</p>
        </div>
      </div>
      <div class="lastRow row">
        <div id="homeGoalie" class="col-6 columnLeft">
          <p class="staticValue">PIM</p>
          <p class="liveStat">0</p>
        </div>
        <div id="awayGoalie" class="col-6 columnRight">
          <p class="staticValue">PIM</p>
          <p class="liveStat">0</p>
        </div>
      </div>
    </div>
  </div>;
}
