var express = require('express');
var router = express.Router();
const Course = require("../models/course");
const TeacherCourse=require("../models/teacher_courses")
const passport = require('passport');


// Get all courses
router.get("/", async (req, res) => {
	const courses = await Course.find().populate("level")
	res.send(courses)
	
})

//Create Course
router.post("/", async (req, res) => {
	try{
	const course = new Course({
		name: req.body.name,
		description: req.body.description,
		level: req.body.level
	})
	await course.save()
	res.send({course,
		success: true,})
} catch {
	res.status(404)
	res.send({ error: "Course doesn't exist!" ,success: false,})
}
})

//Get individual Course
router.get("/:id", passport.authenticate('jwt', { session : false}),async (req, res) => {
    try {

	const course = await Course.findOne({ _id: req.params.id }).populate("level")
	res.send({course,success:true})
    }
    catch {
		res.status(404)
		res.send({ error: "Course doesn't exist!" })
	}
})

//Update individual Course
router.patch("/:id", async (req, res) => {
	try {
		const course = await Course.findOne({ _id: req.params.id })

		if (req.body.name) {
			course.name = req.body.name
		}

		if (req.body.description) {
		   course.description = req.body.description
		}

		if (req.body.level) {
			course.level = req.body.level
		 }

		await course.save()
		res.send({course,
			success: true,})
	} catch {
		res.status(404)
		res.send({ error: "Course doesn't exist!" ,success: false,})
	}
})


//Delete individual Course
router.delete("/:id", async (req, res) => {
	try {
		await Course.findOneAndRemove({ _id: req.params.id })
		await TeacherCourse.findOneAndRemove({ course: req.params.id })

		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Course doesn't exist!" })
	}
})








module.exports = router;