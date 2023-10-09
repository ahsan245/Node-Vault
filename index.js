const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

connectToMongo();
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello From NoteVault!');
})

app.listen(port, () => {
  console.log(`NoteVault backend listening on port http://localhost:${port}`)
})