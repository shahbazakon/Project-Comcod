const mongoose = require("mongoose");

const jobschema =new mongoose.Schema({

    image: {
        type:String,
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

const Job_Register = mongoose.model("Jobdetails" , jobschema);

module.exports = Job_Register;