const express = require("express");
const mongoose = require("mongoose");

require('dotenv').config();
const cors = require('cors')
const app = express();
app.use(express.json());
const router = require('./routers.js')
const PORT = process.env.PORT || 5000;

app.use(cors(
  {
    origin:"http://localhost:5174",
    methods:"GET,POST,PUT,DELETE",
    credentials:true
  }
))
// Async function just for DB connection
app.use(router)
mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('connected to db!'))
.catch((err)=>console.log(err));


// Define routes
app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB!");
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
