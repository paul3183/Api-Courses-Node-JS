const { Router } = require('express');

const router = Router();

const { createVideo, deleteVideoId } = require('../controllers/videos.controller');

router.post('/videos', createVideo);
router.delete('/videos/:id', deleteVideoId);

module.exports = router;