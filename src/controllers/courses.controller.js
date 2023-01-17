const CourseServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
  try {
    const result = await CourseServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createCourseUser = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.create(newCourse);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createNewCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.createCourse(newCourse);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const field = { description };
    const result = await CourseServices.updateCourseId(field, id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getCoursesAllRelations = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.getCoursesAllRelations(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports =
{
  getAllCourses,
  createCourseUser,
  createNewCourse,
  updateCourse,
  getCoursesAllRelations,
};
