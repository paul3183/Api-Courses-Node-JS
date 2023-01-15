const { Router } = require('express');
const router = Router();
const { getAllUsers, getUserById, createUser, updateUser, deleteUser, getUserWithCoursesId } = require('../controllers/users.controller');

router.get('/users', getAllUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.get('/users/:id/courses', getUserWithCoursesId);

module.exports = router;