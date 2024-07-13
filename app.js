const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());
app.use(express.static("./public"));

// routes
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000; // $env:PORT=5000; node app.js (syntax for the Windows PowerShell to set the PORT variable)
const start = async () => {
  console.log(process.env.PORT);
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
// app.get('/api/v1/tasks')             -get all the tasks
// app.post('/api/v1/tasks')            -get all the tasks
// app.get('/api/v1/tasks/:id')         -get all the tasks
// app.patch('/api/v1/tasks/:id')       -get all the tasks
// app.delete('/api/v1/tasks/:id')      -get all the tasks
