
// Load Data
var friendsData = require("../data/friends");

//Routing

module.exports = function(app) {
  // API GET Requests
  // they are shown a JSON of the data in the friends.js array


  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {

  var newFriend = req.body;

  var userResponses = newFriend.scores;

  // Variables to find best match possible
  var matchName;
  var matchImage;
  var totalDifference = 100;

  // Examine all existing friends in the friends.js array
  for (var i = 0; i < friendsData.length; i++) {

    // Logic for finding the difference to each question
    var diff = 0;
    for (var j = 0; j < userResponses.length; j++) {
      diff += Math.abs(friendsData[i].scores[j] - userResponses[j]);
    }

    // If lowest difference, keep friend match
    if (diff < totalDifference) {

      totalDifference = diff;
      matchName = friendsData[i].name;
      matchImage = friendsData[i].photo;
    }
  }

  // Add new user to our friends.js array
  friendsData.push(newFriend);

  // Send our values needed
  res.json({matchName: matchName, matchImage: matchImage});

  });

}