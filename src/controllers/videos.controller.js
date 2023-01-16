const VideoServices = require('../services/videos.services')

const createVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await VideoServices.createNewVideo(newVideo);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const deleteVideoId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await VideoServices.deleteVideo(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  createVideo,
  deleteVideoId
}