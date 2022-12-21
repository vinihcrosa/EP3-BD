const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const confrontoRoutes = require('./conflito/routes');
const gruposArmadosRoutes = require('./gruposArmados/routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.use('/conflito', confrontoRoutes);
app.use('/gruposArmados', gruposArmadosRoutes);
app.use('/chefesMilitares', require('./chefesMilitares/routes'));
app.use('/liderPolitico', require('./liderPolitico/routes'));
app.use('/divisao', require('./divisao/routes'));
app.use('/organizacao', require('./organizacao/routes'));
app.use('/conflitos', require('./conflitos/routes'));
app.use('/tipoArmas', require('./tipoArmas/routes'));

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  });
})

app.listen(3333, () => {
  console.log('Server on port 3333 🔥');
});