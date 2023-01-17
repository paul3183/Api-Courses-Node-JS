const { Router } = require('express');

const router = Router();

const { getAllCourses, createCourseUser, createNewCourse, updateCourse, getCoursesAllRelations, getRelationsAllCoursesId } = require('../controllers/courses.controller');


router.get('/courses', getAllCourses);
router.post('/courses', createCourseUser);
router.post('/courses/new', createNewCourse);
router.put('/courses/:id', updateCourse);
router.get('/courses/:id/relations', getCoursesAllRelations);
router.get('/courses/:id/all', getRelationsAllCoursesId);

module.exports = router;