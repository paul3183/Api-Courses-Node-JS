//recibe la peticion y se ve si esta bien la peticion va a servivcio 
const UserServices = require('../services/users.services');

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const getUserWithCoursesId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserWithCourses(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstname, lastname, password } = req.body;
    const field = { firstname, lastname, password };
    const result = await UserServices.update(field, id);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message)
  }
}

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.status(200).json(result)
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithCoursesId,
}