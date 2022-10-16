const express = require('express');
const routes = require('./routes');

require('./database');

const app = express();

app.use(express.json());
app.use(routes);

const porta = 3333;
app.listen(porta, () => console.log(`está na porta ${porta}`));

