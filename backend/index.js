const express = require("express");
const { noteRouter } = require("./routes/Crud_Router");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/notes", noteRouter);
app.get("/", (req, res) => {
	res.send("Home Page");
});
app.listen(process.env.PORT, async () => {
	try {
		mongoose.connect(process.env.MONGO_URL);
		console.log("database connected");
		console.log(`App is listening on port ${process.env.PORT}.`);
	} catch (error) {}
});
