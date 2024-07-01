const express = require('express');
const router = express.Router();
const Person = require('../Models/Person'); // Adjust the path if necessary

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fetched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get('/:workType', async (req, res) => {
  try {
    const workType = req.params.workType;
    if (['chef', 'waiter', 'Manager', 'owner'].includes(workType)) {
      const response = await Person.find({ work: workType });
      console.log('Data fetched successfully');
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Not found' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//update method

router.put('/:id',async(req,res)=>{
 try {
  const personId=req.params.id;
  const UpdatedData=req.body;
  const response=await Person.findByIdAndUpdate(personId,UpdatedData,{
    new:true,//return the updated document
    runValidators:true, //Run Mongoose Validation 
   })
   if(!response)
    {
      return res.status(404).json({error:'Person not found'})
    }
    console.log('data saved');
    res.status(200).json(response);
  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal server error'});
  }
})

// Delete
module.exports = router;
