const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
	{
		setup: {
			// validations
			type: String,
			required: [true, "Must add a set-up to a joke."],
			minlength: [10, "Must be 10 characters long."]
		},
		punchline: {
			type: String,
			required: [true, "Every joke must have a punchline."],
			minlength: [3, "Punchline must be at least 3 characters long."]
		}
});

module.exports = mongoose.model("Joke", JokeSchema);

