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

    const deletedResume = await Resume.findOneAndDelete({
      userId,
      _id: resumeId,
    });

    if (!deletedResume) {
      return res
        .status(404)
        .json({ message: "Resume not found or unauthorized" });
    }
    //Return Success Message
    return res.status(200).json({ message: "Resume Deleted Successfully" });
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
    const resume = await Resume.findOne({ public: true, _id: resumeId });

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
    const image = req.file;

    let resumeDataCopy;
    if (typeof resumeData === "string") {
      resumeDataCopy = JSON.parse(resumeData);
    } else {
      resumeDataCopy = structuredClone(resumeData);
    }

    if (image) {
      const imageBufferData = fs.createReadStream(image.path);

      const response = await imagekit.files.upload({
        file: imageBufferData,
        fileName: `resume_${Date.now()}.jpg`,
        folder: "user-resumes",
      });

      // & Forces Auto-Focus
      const baseUrl = process.env.IMAGEKIT_BASEURL; //& ImageKit ID ; It is unique to your account
      const transformation = `tr:w-300,h-300,fo-face,z-0.75${
        removeBackground === "true" || removeBackground === true
          ? ",e-removedotbg" //& why ",e-removedotbg  "? bcs the string looks like this:- tr:w-300,h-300,fo-face,e-bg_remove. Hence, the comma
          : ""
      }`;

      resumeDataCopy.personal_info.image = `${baseUrl}/${transformation}${response.filePath}`; //& "response.filePath" is a specific string returned by the server after a successful upload. It represents the unique location of your file within your ImageKit storage.
    }

    const resume = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      resumeDataCopy,
      { new: true }
    );

    return res.status(200).json({ message: "Saved Successfully!", resume });
  } catch (error) {
    console.error("Update Error:", error);
    return res.status(400).json({ message: error.message });
  }
};
