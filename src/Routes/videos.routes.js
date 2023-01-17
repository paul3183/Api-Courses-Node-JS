const { Router } = require('express');

const router = Router();

const { createVideo, deleteVideoId, getAllVideos } = require('../controllers/videos.controller');


router.get('/videos', getAllVideos)
router.post('/videos', createVideo);
router.delete('/videos/:id', deleteVideoId);

module.exports = router;