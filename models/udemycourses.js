const mongoose = require("mongoose");

const courseschema =new mongoose.Schema({

    course_name:{
        type:String,
        require :true
    },
    course_link:{
        type:String,
        require:true
    },
    course_coupon:{
        type:String,
        require:true
    }

})

const Udemy_course = mongoose.model("udemy_courses" , courseschema);

module.exports = Udemy_course;