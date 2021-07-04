var express = require('express');
var router = express.Router();
const Course = require("../models/course");
const TeacherCourse=require("../models/teacher_courses")
const passport = require('passport');
const course_level=require("../models/course_level")
const course_schedual=require("../models/courses_schedual")
const exam=require("../models/exam")
const homework=require("../models/homework")
const matrial=require("../models/material")
const SchedularSturday = require("../models/schedular-Sturday");
const SchedularSunday = require("../models/schedular-sunday");
const SchedularMonday = require("../models/schedular-monday");
const SchedularTusday = require("../models/schedular-tusday");
const SchedularWensday = require("../models/schedular-wensday");
const SchedularThrisday = require("../models/schedular-thrisday");
const schedual_couseModel = require("../models/schedular-wensday");
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
		Zoomlink:req.body.Zoomlink,
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
    // try {

	const course = await Course.findOne({ _id: req.params.id }).populate("level")
	res.send(course)
    // }
    // catch {
	// 	res.status(404)
	// 	res.send({ error: "Course doesn't exist!" })
	// }
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

		 if (req.body.Zoomlink) {
			course.Zoomlink = req.body.Zoomlink
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
		const course = await Course.findOne({ _id: req.params.id })
		await SchedularMonday.findOneAndRemove({ courses: course.name })
		await SchedularSturday.findOneAndRemove({ courses: course.name })
		await SchedularSunday.findOneAndRemove({ courses: course.name })
		await SchedularThrisday.findOneAndRemove({ courses: course.name })
		await SchedularTusday.findOneAndRemove({ courses: course.name })
		await SchedularWensday.findOneAndRemove({ courses: course.name })

		await homework.findOneAndRemove({ course: req.params.id })
		await matrial.findOneAndRemove({ course: req.params.id })

		await TeacherCourse.findOneAndRemove({ course: req.params.id })
		await course_schedual.findOneAndRemove({ course: req.params.id })
		await exam.findOneAndRemove({ course: req.params.id })

		await course_level.findOneAndRemove({ course: req.params.id })
		await Course.findOneAndRemove({ _id: req.params.id })
		
		

		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Course doesn't exist!" })
	}
})








module.exports = router;