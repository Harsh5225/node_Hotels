const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes'); 
const MenuItem=require('./routes/menuRoutes');
const db=require('./db')
app.use(bodyParser.json());
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.send('Welcome to my hotel');
})
// Use the person 


app.use('/person', personRoutes);
app.use('/menu',MenuItem);

// Uncommented app.listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});


