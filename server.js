const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const personRoutes = require('./routes/personRoutes'); 
const MenuItem=require('./routes/menuRoutes');
const db=require('./db')
app.use(bodyParser.json());


app.get('/',(req,res)=>{
  res.send('Welcome to my hotel');
})
// Use the person routes
app.use('/person', personRoutes);
app.use('/menu',MenuItem);
// Uncommented app.listen
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
