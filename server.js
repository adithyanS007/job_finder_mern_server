const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes');

dotenv.config();

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'https://job-finder-mern-livid.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight
app.use(express.json());
app.use('/jobs', jobRoutes);
app.get('/', (req, res) => res.send('API running...'));

// MongoDB connection caching for serverless
let isConnected = false;
async function connectToDB() {
  if (isConnected) return;
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
}

// Export handler for Vercel
module.exports = async (req, res) => {
  await connectToDB();
  return app(req, res);
};