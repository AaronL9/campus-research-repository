require("dotenv").config();

const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const researchRoutes = require("./routes/research");
const adminRoutes = require("./routes/admin");

// express app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// route
app.use("/api/research", researchRoutes);
app.use("/api/user", userRoutes);
app.use("/api/admin", adminRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`connected to db & listening to port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
