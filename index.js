const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: '.env.local' });

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

app.listen(process.env.port,function(){
  console.log("Ready to Go!");
});