const CourseServices = require('../services/courses.services');

const getAllCourses = async (req, res) => {
  try {
    const result = await CourseServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
module.exports =
{
  getAllCourses,
};
