var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res){
		res.json(friends);
	});

	app.post("/api/friends", function(req, res){
		var perfectMatch = {
			name: "",
			photo: "",
			friendDifference: 1000
		};

		var userData = req;body;
		var userTotal = userData;scores;

		var difference = 0;

		for (var i = 0; i<friends.length; i++) {
			console.log(friends[i].name);
			difference=0;

			for (var j=0; j < friends[i].scores[j]; j++) {
				difference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));
			if(difference <= perfectMatch.friendDifference) {
				perfectMatch.name=friends[i].name;
				perfectMatch.photo=friends[i].photo;
				perfectMatch.friendDifference=difference

				}


			}
		}

		friends.push(userData);
		res.json(perfectMatch);
	});

}
