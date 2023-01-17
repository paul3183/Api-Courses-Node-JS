const Videos = require('../models/videos.models');

class VideoServices {
  static async getAllVideos() {
    try {
      const result = await Videos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async createNewVideo(video) {
    try {
      const result = await Videos.create(video);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteVideo(id) {
    try {
      const result = await Videos.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = VideoServices;