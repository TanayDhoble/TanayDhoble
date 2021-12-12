const mongoose=require('mongoose')

const menSchema=new mongoose.Schema({

    ranking:{
        required:true,
        unique:true,
        type:Number

    },
    name:{
        type:String,
        required:true,
        trim:true

    },
    dob:{
        type:Date,
        required:true,
        trim:true

    },
    country:{
        type:String,
        required:true,
        trim:true

    },
    score:{
        type:Number,
        required:true,
        trim:true

    },
    event:{
        type:String,
        default:"100m"
       

    }

})

//We are creating new collection 
const MenRanking=new mongoose.model("MenRanking",menSchema)

module.exports=MenRanking