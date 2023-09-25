const express = require("express");
const Bookmark = require("../models/bookmarked");
const router = express.Router();
//INDUCES
//SHOW INDEX CREATE DELETE UPDATE

//index
//get data from the database/backend and send it to the frontend
router.get("/", async(req, res)=>{
    try{
        res.json(await Bookmark.find())
    }catch(error){
        res.status(400).json(error);
    }
})

//CREATE and send data to the database 
router.post("/", async (req, res) => {
  try {
    res.json(await Bookmark.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

//show route: require some type of identifier
router.get("/:id", async(req, res)=>{
    try {
        res.json(await Bookmark.findById(req.params.id));
      } catch (error) {
        res.status(400).json(error);
      }
})

router.delete("/:id", async(req, res)=>{
    try {
        res.json(await Bookmark.findByIdAndDelete(req.params.id));
      } catch (error) {
        res.status(400).json(error);
      }
})

//editing/updating route
router.put("/:id", async(req, res)=>{
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body, {new: true}));
  } catch (error) {
    res.status(400).json(error);
  }
})
module.exports = router;
