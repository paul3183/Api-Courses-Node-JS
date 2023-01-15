const Courses = require('../models/courses.models');

class CourseServices {
  //(f):::Obtener todos los cursos;
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  // Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url
}

module.exports = CourseServices;