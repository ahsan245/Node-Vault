const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
require("dotenv").config();


connectToMongo();
const app = express()

app.use(cors());
app.use(express.json());

//Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello From NoteVault!');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);

});