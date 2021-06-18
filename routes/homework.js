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

	const homework = await HomeWork.findOne({ _id: req.params.id })
	res.send(homework)
    }
    catch {
		res.status(404)
		res.send({ error: "HomeWork doesn't exist!" })
	}
})

// //Update individual Course
// router.patch("/:id", async (req, res) => {
// 	try {
// 		const course = await Course.findOne({ _id: req.params.id })

// 		if (req.body.name) {
// 			course.name = req.body.name
// 		}

// 		if (req.body.description) {
// 		   course.description = req.body.description
// 		}

// 		await course.save()
// 		res.send(course)
// 	} catch {
// 		res.status(404)
// 		res.send({ error: "Course doesn't exist!" })
// 	}
// })


// //Delete individual Course
// router.delete("/:id", async (req, res) => {
// 	try {
// 		await Course.deleteOne({ _id: req.params.id })
// 		res.status(204).send()
// 	} catch {
// 		res.status(404)
// 		res.send({ error: "Course doesn't exist!" })
// 	}
// })




module.exports = router;