const CategoriesServices = require('../services/categories.services');

const getAllCategories = async (req, res) => {
  try {
    const result = await CategoriesServices.getAllCategory();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const CreateNewCategory = async (req, res) => {
  try {
    const newCategory = req.body;
    const result = await CategoriesServices.createCategory(newCategory);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const DeleteCategory = async (req, res) => {
  try {
    const result = await CategoriesServices.deleteCategory();
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  CreateNewCategory,
  DeleteCategory,
  getAllCategories,
}
