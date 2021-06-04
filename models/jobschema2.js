const mongoose = require("mongoose");

const jobschema2 =new mongoose.Schema({

    logo:{
        type:String,
        require :true
    },
    job_name:{
        type:String,
        require:true
    },
    job_link:{
        type:String,
        require:true
    }

})

const Job_private = mongoose.model("Jobdetailspri" , jobschema2);

module.exports = Job_private;