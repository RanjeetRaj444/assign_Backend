const express = require("express");
const { NoteModel } = require("../models/Crud_model");

const noteRouter = express.Router();

//creating a new notes:--
noteRouter.post("/create", async (req, res) => {
	try {
		const note = await NoteModel.create(req.body);
		res.send({ msg: "A new note has been added.", note: note });
	} catch (error) {
		res.send({ msg: error.message });
	}
});

//getting notes
noteRouter.get("/", async (req, res) => {
	try {
		const notes = await NoteModel.find();
		res.send({ note: notes });
	} catch (error) {
		res.send({ msg: error.message });
	}
});

//updating a note
noteRouter.patch("/update/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const notes = await NoteModel.findByIdAndUpdate({ _id: id }, req.body, {
			new: true,
		});
		res.send({ msg: `note with id - ${id} updated`, note: notes });
	} catch (error) {
		res.send({ msg: error.message });
	}
});

//deleting a note
noteRouter.delete("/delete/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const notes = await NoteModel.findByIdAndDelete({ _id: id });
		res.send({ msg: `note with id -${id} deleted!`, note: notes });
	} catch (error) {
		res.send({ msg: error.message });
	}
});

module.exports = { noteRouter };
//hello i am ranjeet kumar raj why are you here ?and why did you come here ?are you a police officer ? or what and why are yoyu here are you come to kill me
