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


db.on('open', ()=>{ console.log("¡Conectado a MongoDB!")} )
db.on('error', ()=>{ console.log("¡Error al conectar a MongoDB!")} )


export default db;
