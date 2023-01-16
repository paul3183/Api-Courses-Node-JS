const { Router } = require('express');

const router = Router();

const { getAllCourses, createCourseUser, createNewCourse, updateCourse } = require('../controllers/courses.controller');


router.get('/courses', getAllCourses);
router.post('/courses', createCourseUser);
router.post('/courses/new', createNewCourse);
router.put('/courses/:id', updateCourse);

module.exports = router;