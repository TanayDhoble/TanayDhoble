const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/olympics",{

    useNewUrlParser:true,
    useUnifiedTopology:false
}).then(()=>{
    console.log("Database conected");
}).catch((e)=>{
    console.log("No connection");
})