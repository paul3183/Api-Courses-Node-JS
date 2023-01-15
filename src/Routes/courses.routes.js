const { Router } = require('express');

const router = Router();

const { getAllCourses, } = require('../controllers/courses.controller');

router.get('/courses', getAllCourses);

module.exports = router;