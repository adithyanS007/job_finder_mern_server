const Job = require("../models/jobModel");

// GET all jobs
const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({
      success: true,
      message: "Jobs fetched successfully",
      data: jobs
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch jobs",
      error: err.message
    });
  }
};

// GET a single job by ID
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Job fetched successfully",
      data: job
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch job",
      error: err.message
    });
  }
};

// POST a new job
const postJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: job
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to create job",
      error: err.message
    });
  }
};

module.exports = { getJobs, getJobById, postJob };




// const Job = require("../models/jobModel");

// const getJobs = async (req, res) => {
//   try {
//     const jobs = await Job.find();
//     res.json(jobs);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const getJobById = async (req, res) => {
//   try {
//     const job = await Job.findById(req.params.id);
//     if (!job) return res.status(404).json({ error: "Job not found" });
//     res.json(job);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// const postJob = async (req, res) => {
//   try {
//     const job = new Job(req.body);
//     await job.save();
//     res.status(201).json(job);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// module.exports = { getJobs, getJobById, postJob };
