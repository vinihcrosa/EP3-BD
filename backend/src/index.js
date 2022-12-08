const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  });
})

app.listen(3333, () => {
  console.log('Server on port 3333 🔥');
});