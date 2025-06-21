const express = require("express");
const router = express.Router();
const { getJobs, getJobById, postJob } = require("../controllers/jobController");

router.get("/", getJobs);
router.get("/:id", getJobById);
router.post("/", postJob);

module.exports = router;
