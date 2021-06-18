var express = require('express');
var router = express.Router();
const HomeWork = require("../models/homework");

// Get all homeworks
router.get("/", async (req, res) => {
	const homeworks = await HomeWork.find().populate("courseLevel")
	res.send(homeworks)
})

//Create HomeWork
router.post("/", async (req, res) => {
	const homework = new HomeWork({
		name: req.body.name,
		courseLevel: req.body.courseLevel,
	})
	await homework.save()
	res.send(homework)
})

//Get individual HomeWork
router.get("/:id", async (req, res) => {
    try {

	const homework = await HomeWork.findOne({ _id: req.params.id }).populate("courseLevel")
	res.send(homework)
    }
    catch {
		res.status(404)
		res.send({ error: "HomeWork doesn't exist!" })
	}
})

//Update individual HomeWork
router.patch("/:id", async (req, res) => {
	try {
		const homework = await HomeWork.findOne({ _id: req.params.id })

		if (req.body.name) {
			homework.name = req.body.name
		}

		if (req.body.courseLevel) {
		   homework.courseLevel = req.body.courseLevel
		}

		await homework.save()
		res.send(homework)
	} catch {
		res.status(404)
		res.send({ error: "HomeWork doesn't exist!" })
	}
})


//Delete individual HomeWork
router.delete("/:id", async (req, res) => {
	try {
		await HomeWork.deleteOne({ _id: req.params.id })
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "HomeWork doesn't exist!" })
	}
})




module.exports = router;