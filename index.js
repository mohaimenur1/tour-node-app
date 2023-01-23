//default module

const fs = require("fs");
// const superagent = require("superagent");
const express = require("express");

require("dotenv").config({ path: "./config.env" });
// console.log(process.env);

const Db = process.env.DATABASE_LOCAL;

const mongoose = require("mongoose");

//mandteroy add to strict query false
mongoose.set("strictQuery", false);

//connection
mongoose.connect(Db).then(() => {
  console.log("Db connection Successfully");
});

const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.set("view engine", "ejs");

//declaring middleware
app.use(morgan("dev"));
app.use(express.json());

//custom build middleware
// app.use((req, res, next) => {
//   console.log("hello from the middleware 👍");
//   next();
// });

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();
//   next();
// });

const port = 5000;

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "api running", app: "narutos" });
// });

//------------------------------//ROUTE HANDLER FUNCTION-------------------------//

//----------------------------//ROUTE HANDLER FUNCTION----------------------------//

//------------------------------all route----------------------------------------//

// app.get("/api/v1/tours", getAllTours);
// app.post("/api/v1/tours", getTour);
// app.get("/api/v1/tours/:id", createTour);
// app.patch("/api/v1/tours/:id", updateTour);

//new route system

app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

//------------------------------all route----------------------------------------//

app.all("*", (req, res) => {
  res.status(404).send("<h1>resources not found</h1>");
});

app.listen(port, () => {
  console.log(`server running successfully on ${port}`);
});
