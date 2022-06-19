const mongoose = require('mongoose');
var videoSchema = new mongoose.Schema({
    videoName:{
        type : String
    },
    videoUrl : {
        type : String
    },
    videoDescription : {
        type: String
    }
});

mongoose.model('User', videoSchema);