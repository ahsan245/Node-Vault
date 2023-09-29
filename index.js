const connectToMongo = require('./db');
const express = require('express');
require('dotenv').config({ path: '.env.local' });

connectToMongo();
const app = express()
const port = 5000

app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello From NoteVault!');
})

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})