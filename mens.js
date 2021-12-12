const express=require('express');
const router=new express.Router();
const MenRanking=require("../Model/men")


//Handling the post request
router.post("/mens",async(req,res)=>{
    try {
        const a= new MenRanking(req.body)
    
        const b= await a.save();
        res.status(201).send(b)
    } catch (error) {
        res.status(400).send(error)
    }
})



router.get("/mens",async(req,res)=>{
    try {
        const a= await MenRanking.find({}).sort({"ranking":1})
        res.send(a)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get("/men/:ID",async(req,res)=>{
    try {
        const _id=req.params.ID
        const a= await MenRanking.findById(_id)
        // const ide=req.params.ID
        // const a= await MenRanking.findById({_id:ide})
        res.send(a)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.patch("/men/:ID",async(req,res)=>{
    try {
        const _id=req.params.ID
        const a= await MenRanking.findByIdAndUpdate(_id,req.body,{new:true})
      
        res.send(a)
    } catch (error) {
        res.status(500).send(error)
    }
})

router.delete("/men/:ID",async(req,res)=>{
    try {
         // const a= await MenRanking.findById(req.params.ID) ...instad of below 2 lines
        const _id=req.params.ID
        const a= await MenRanking.findByIdAndDelete(_id,{new:true})
       
        res.send(a)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports=router