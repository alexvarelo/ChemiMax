// To connect with your mongoDB database
import mongoose from "mongoose";
// Connecting to database
mongoose.connect(
"mongodb://127.0.0.1:27017/",
{
	dbName: "ChemiMax",
	useNewUrlParser: true,
	useUnifiedTopology: true,
},
(err) =>
	err ? console.log(err) : console.log(
	"Connected to your ChemiMax database")
);

const db = mongoose.connection;

export default db;
