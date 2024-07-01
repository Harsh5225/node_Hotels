const express = require("express");
const router = express.Router();

const MenuItem = require('./../Models/menu');

router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data festched successfully");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const Menu = new MenuItem(data);
    const response = await Menu.save();
    console.log("Data saved successfully");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Homework
router.put('/:taste',async(req,res)=>{
 try{
  const taste=req.params.taste;
  const UpdatedData=req.body;
  const response= await MenuItem.findByIdAndUpdate(taste,UpdatedData,{
    new:true,
    runValidators:true
  })
  if(!response)
    {
      return res.status(404).json({error:"Internal server error"});
    }
  console.log('Data fetched successfully')
  res.status(200).json(response)
 }catch(err){
  console.log(err);
  res.status(500).json({error:"Internal server error"});
 }
})

router.get('/:taste',async(req,res)=>{
  try{
     const tastetype=req.params.taste;
     if(['sweet','spicy','salty'].includes(tastetype)){
      const response=await MenuItem.find({taste:tastetype});
      console.log('Data fetched successfully');
      res.status(200).json(response);
     }
     else{
      return res.status(404).json({ error: 'Not found' });
     }
  }catch(err){
  console.log(err);
  res.status(500).json({error:"Internal server error"});
  }
})

//delete
router.delete('/:id',async(req,res)=>{
  try{
    const idtype= req.params.id;

    const response= await MenuItem.findByIdAndDelete(idtype);
    if (response) {
      console.log('Data deleted successfully');
      res.status(200).json({ message: 'Menu item deleted successfully', item: response });
    } else {
      res.status(404).json({ error: 'Menu item not found' });
    }
  }catch(err){
    console.log(err);
    res.status(500).json({error:"Internal server error"});
  }
})

//comment added
module.exports=router;