const mongoose = require("mongoose");
const validator = require("validator");

const addVideo = async (req, res) => {

    const usersModel = mongoose.model("users");
    const videosModel = mongoose.model("videos");


    const { title, title_lk,video,ads } = req.body;

    if(!title) throw "Title is required!";
    if(!title_lk) throw "Title (Sinhala) is required!";
    if(!validator.isURL(video)) throw "Invalid video link!";
    if(!validator.isURL(ads)) throw "Invalid ads link!";
    
    const createdVideo = await videosModel.create({
        title: title,
        title_si: title_lk,
        video_link: video,
        ads_link: ads,
        user_id: req.user._id,
    });

    res.status(200).json({
        status: "success",
        message:" Video added successfully!",
        data:{
            link:"https://kalaxhunter.vercel.app/en/video?id="+createdVideo._id,
            title: title,
            title_si: title_lk,
            video_link: video,
            ads_link: ads,
        },
    });
};

module.exports = addVideo;