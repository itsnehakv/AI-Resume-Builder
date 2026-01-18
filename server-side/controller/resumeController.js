//^ Controllers for creating New Resume & Deleting Resume & Updating Resume
// --------------------------------------------------------------------------------------------------
//* Controller for creating New Resume
// * POST:/api/resumes/create

import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs"; //File System ( for image )

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    //Create New Resume
    const newResume = await Resume.create({ userId, title });
    //Return Success Message
    return res
      .status(201)
      .json({ message: "Resume Created Successfully", resume: newResume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------

//* Controller for Deleting Resume
//* DELETE: /api/resumes/delete

export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    await Resume.findOneAndDelete({ userId, _id: resumeId });

    //Return Success Message
    return res.status(201).json({ message: "Resume Deleted Successfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------

//* Controller to get user resumes by ID
//* GET: /api/resume/get
export const getResumeByID = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({ userId, _id: resumeId });

    //If resume doesn't exist at resumeId
    if (!resume) {
      return res.status(404).json({ message: "Resume Not Found" });
    }

    //Else if resume does exist then send
    resume.__v = undefined; //version key ; tracks the internal version of the document to prevent concurrent modification ; Why hide it? It is an internal database detail ; Including it makes the JSON response look "cluttered."
    resume.createdAt = undefined; // timestamp ; Why hide ? UI only cares about the content of the resume, not when the database entry was generated ; metadata that isn't relevant to the end-user.
    resume.updatedAt = undefined;
    //Return Success Message
    return res.status(201).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------

//* Get user resume by id when resume is public
//* GET: /api/resumes/public
export const getPublicResumeByID = async (req, res) => {
  try {
    const { resumeId } = req.params;
    const resume = await resume.findOne({ public: true, _id: resumeId });

    if (!resume) {
      return res.status(404).json({ message: "Resume Not Found" });
    }
    return res.status(201).json({ resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

// --------------------------------------------------------------------------------------------------

//* Controller for Updating Resume
//* PUT: api/resumes/update
export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file; //the users photo used in resume ; file property added by multer.js

    let resumeDataCopy = JSON.parse(resumeData);

    if (image) {
      const imageBufferData = fs.createReadStream(image.path);

      const response = await imagekit.files.upload({
        file: imageBufferData, //Buffer Image
        fileName: "resume.jpg",
        folder: "user-resumes",
        transformation: {
          pre:
            "w-300,h-300 fo-face, z-0.75" +
            (removeBackground ? ",e.bgremove" : ""), //dimension of image ; focus on face ; zoom out by .75 ; if removeBackgroun is true -> remove bg ; provided by imagekit
        },
      });

      resumeDataCopy.personal_info.image = response.url;
    }
    const resume = await Resume.findByIdAndUpdate(
      { userId, _id: resumeId },
      resumeDataCopy,
      { new: true } //{new:true} returns the new updated data
    );
    return res.status(200).json({ message: "Saved Successfully!", resume });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
