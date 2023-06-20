const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Rotas
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
