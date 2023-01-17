const { Router } = require('express');

const router = Router();

const { CreateNewCategory, DeleteCategory, getAllCategories, getCoursesAllRelations } = require('../controllers/categories.controller');

router.get('/categories', getAllCategories);
router.post('/categories', CreateNewCategory);
router.delete('/categories', DeleteCategory);


module.exports = router;