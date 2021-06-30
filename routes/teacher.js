var express = require('express');
var router = express.Router();
const userModel = require("../models/user");
const schedual_couseModel = require("../models/courses_schedual");
const schedualModel = require("../models/schedual");
const parentModel = require("../models/parent");
const TeacherCourseModel = require("../models/teacher_courses");
const CourseModel = require("../models/course")
const passport = require('passport');
//Get specific teacher
router.get("/:id", async (req, res) => {
    try {

	const teacher = await userModel.findOne({ _id: req.params.id })
	res.json(teacher)
    }
    catch {
		res.status(404)
		res.send({ error: "User doesn't exist!" })
	}
})

//Get courses of individual teacher
router.get("/:id/courses", async (req, res) => {
    try {

	const courses = await TeacherCourseModel.find({ teacher: req.params.id }).populate('teacher').populate('course');
	res.json(courses)
    }
    catch {
		res.status(404)
		res.send({ error: "Teacher doesn't exist!" })
	}
})

//assign course of individual teacher
router.post("/:id/courses", async (req, res) => {
    const course = new TeacherCourseModel({
		teacher: req.params.id,
		course: req.body.course
	})
	await course.save()
	res.send(course)
})

//Get All Teachers
router.get("/", async (req, res) => {
	const teachers = await userModel.find({type:'teacher'})
	res.send(teachers)
})



//get teacher levels
router.get("/:id/levels", async (req, res) => {
	const courses = await TeacherCourseModel.find({teacher:req.params.id})
	let arr=[]
	for (course of courses)
	{
		arr.push(course.course._id)
	}
	const levels=await CourseModel.find({_id:{$in:arr}}).populate("level")
	console.log(arr)

	res.send(levels)
})

//Get All Teachers
router.get("/", async (req, res) => {
	const teachers = await userModel.find({type:'teacher'})
	res.send(teachers)
})


//Delete specific course from individual teacher
router.delete("/:id/courses", async (req, res) => {
	try {
		
		await TeacherCourseModel.deleteOne({ teacher: req.params.id ,course:req.body.course})
		res.status(204).send()
	} catch {
		res.status(404)
		res.send({ error: "Course doesn't exist!" })
	}
})

////Get courses that not assigned to individual teacher
router.get("/:id/nincourses", async (req, res) => {
    try {
		const courses_of_teacher=await TeacherCourseModel.find({ teacher: req.params.id });
		var array=[];
		for(course of courses_of_teacher)
		{
			array.push(course.course._id);

		}
		
         console.log(array);

	const courses_not_belong_teacher = await CourseModel.find({ _id: { $nin: array } });

	res.json(courses_not_belong_teacher)
    }
    catch {
		res.status(404)
		res.send({ error: "Teacher doesn't exist!" })
	}
})







module.exports = router;