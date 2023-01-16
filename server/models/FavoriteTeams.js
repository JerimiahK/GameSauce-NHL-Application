const { Schema, model } = require("mongoose");

const favoriteTeamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
});

const favoriteTeams = model("favoriteTeam", favoriteTeamSchema);

module.exports = favoriteTeams;
