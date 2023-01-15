const db = require('../utils/database');
const Users = require('../models/users.models');
const UserCourses = require('../models/userCourses.models');
const Courses = require('../models/courses.models');
const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');


const users = [
  {
    firstname: 'paul',
    lastname: 'martin',
    password: '101010',
    email: 'paul_ruiz5@hotmail.com',
  },
  {
    firstname: 'robert',
    lastname: 'centeno',
    password: '202020',
    email: 'robert@hotmail.com',
  },
  {
    firstname: 'diego',
    lastname: 'garay',
    password: '303030',
    email: 'diego@hotmail.com'
  }
];
const userCourses = [
  {
    userId: '1',
    courseId: '1',
  },
  {
    userId: '2',
    courseId: '1',
  },
  {
    userId: '3',
    courseId: '2',
  },
  {
    userId: '1',
    courseId: '2',
  },
  {
    userId: '1',
    courseId: '1',
  },
  {
    userId: '2',
    courseId: '2',
  },
  {
    userId: '3',
    courseId: '3',
  },
  {
    userId: '1',
    courseId: '4',
  }
];

const courses = [
  {
    title: 'mathematics',
    description: 'clases l-m-v',
    instructor: 'dieguin'
  },
  {
    title: 'spanglish',
    description: 'clases m-j-s',
    instructor: 'robert'
  },
  {
    title: 'sonseras',
    description: 'clases d-f',
    instructor: 'ludy'
  },
  {
    title: 'fisica',
    description: 'clases l-m-v',
    instructor: 'paul'
  }
];
const categories = [
  {
    name: 'math',
    courseId: '1'
  },
  {
    name: 'math',
    courseId: '4'
  },
  {
    name: 'idioms',
    courseId: '2'
  },
  {
    name: 'others',
    courseId: '3'
  }
];

const videos = [
  {
    title: 'trigonometria',
    url: 'http:/robert.com',
    courseId: '1'
  },
  {
    title: 'aritmetica',
    url: 'http:/paul.com',
    courseId: '1'
  },
  {
    title: 'ingles',
    url: 'http:/dieguin.com',
    courseId: '2'
  },
  {
    title: 'criptomonedas',
    url: 'http:/ludy.com',
    courseId: '3'
  },
  {
    title: 'vectores',
    url: 'http:/wikipedia',
    courseId: '4'
  }
]

db.sync({ force: true })
  .then(() => {
    console.log('iniciando con el sembrado')
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      userCourses.forEach((userCourse) => UserCourses.create(userCourse));
    }, 100);

    setTimeout(() => {
      courses.forEach((course) => Courses.create(course));
    }, 200);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 300);
    setTimeout(() => {
      videos.forEach((video) => Videos.create(video));
    }, 400);
  });
