const express = require("express");
//conecto la aplicacion con la base de datos:
const db = require('./utils/database');

const userRoutes = require('./Routes/users.routes');
const courseRoutes = require('./Routes/courses.routes');

const initModels = require('./models/initModels');


const app = express();

const PORT = 8000;

db.authenticate().then(() => console.log('autenticado')).catch((error) => console.log(error));

app.use(express.json());
app.use('/api/v1', userRoutes);
app.use('/api/v1', courseRoutes);

initModels();
db.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
});

