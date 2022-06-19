const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/VideoDetails',{
    useNewUrlParser: true
},
(err)=>{
    if(!err){
        console.log('MongoDB Connected Successfully');
    }
    else{
        console.log(`Error in DB Connection ${err}`);
    }
});

require('./videodetails.model');