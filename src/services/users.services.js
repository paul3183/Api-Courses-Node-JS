//hacemos la parte opeerativa en js
const Users = require('../models/users.models');
const Categories = require('../models/categories.models');
const UserCourses = require('../models/userCourses.models');
const Courses = require('../models/courses.models');

class UserServices {
  //adicional traer todos
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  //la (a)
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //la (b) Obtener a un usuario junto con los cursos donde esta suscrito (Mostrar los mismos datos del usuario que en el punto anterior junto al nombre del curso)
  static async getUserWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        include: {
          model: UserCourses,
          as: "usersCourses",
          include: {
            model: Courses,
            as: 'usersCourses'
          }
        }
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  //probado: funciona (la c)
  static async create(user) {
    try {
      const result = await Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }
  //probado: funciona la (d) Actualizar un usuario,(solo se permitirá los nombres y la contraseña) 
  static async update(field, id) {
    try {
      const result = await Users.update(field, {
        where: { id },
      });
      return result
    } catch (error) {
      throw error;
    }
  }
  //probado: 
  static async delete(id) {
    try {
      const result = await Users.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error
    }
  }
  //(e) Agregar un curso a un usuario:


  //(f) Obtener todos los cursos:


  //(g) Obtener todos los cursos junto a sus categorías y sus videos (de las categorías solo deberás mostrar el nombre, de los videos solo deberás mostrar el nombre y su url:

  //(h) Crear un nuevo curso

  //(i) Editar un curso (solo se permite cambiar la descripción)

  //(j) Crear videos 

  // (k) eliminar videos

  // (l) crear categorias

  // (m) eliminar categorias

}

module.exports = UserServices;