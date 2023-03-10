const Categories = require('../models/categories.models');
const Courses = require('../models/courses.models');
const UserCourses = require('../models/userCourses.models');
const Users = require('../models/users.models');
const Videos = require('../models/videos.models');

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

  //(e) Agregar un curso a un usuario se crea la relacion:
  static async create(AsignCourse) {
    try {
      const result = await UserCourses.create(AsignCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

  //(h) Crear un nuevo curso:
  static async createCourse(newCourse) {
    try {
      const result = await Courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //(i) Editar un curso (solo se permite cambiar la descripción):
  static async updateCourseId(field, id) {
    try {
      const result = await Courses.update(field, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  //(g) Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url:
  static async getCoursesAllRelations(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: 'categories',
          },
          {
            model: Videos,
            as: 'videos',
          }
        ]
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  //Reto opcional:
  //opcional: Reto opcional!: Crea un join que traiga como tabla primaria los cursos y todas sus relaciones
  static async getRelationsAllCoursesId(id) {
    try {
      const result = await Courses.findOne({
        where: { id },
        include: [
          {
            model: Categories,
            as: 'categories'
          },
          {
            model: Videos,
            as: 'videos'
          },
          {
            model: UserCourses,
            as: 'courses1',
            include:
            {
              model: Users,
              as: 'users'
            }
          }
        ]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CourseServices;