const Users = require('./users.models');
const UserCourses = require('./userCourses.models');
const Categories = require('./categories.models');
const Courses = require('./courses.models');
const Videos = require('./videos.models');

const initModels = () => {
  //   Users;
  //  UserCourses;
  // Courses;
  // Categories;
  // Videos;

  Users.hasMany(UserCourses, { as: 'usersCourses', foreignKey: 'user_id' });
  UserCourses.belongsTo(Users, { as: 'users', foreignKey: 'user_id' });

  UserCourses.belongsTo(Courses, { as: 'usersCourses', foreignKey: 'course_id' });
  Courses.hasMany(UserCourses, { as: 'courses', foreignKey: 'course_id' });

  Courses.hasMany(Categories, { as: 'categories', foreignKey: 'course_id' });
  Categories.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });

  Courses.hasMany(Videos, { as: 'videos', foreignKey: 'course_id' });
  Videos.belongsTo(Courses, { as: 'courses', foreignKey: 'course_id' });

}
//hasone tiene uno uno a uno
// hasmany tieen muchos, muchos muchos
//belongs to pertenece ah, de uno a uno o de muchos amuchos , de uno amuchos, dondet tenga la llave foranea se una bt
// users un usuarios tiene muchos cursos
//       un curso teiene muchos usuarios

//pivote es users_courses

module.exports = initModels;