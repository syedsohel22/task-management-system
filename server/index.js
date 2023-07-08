// Importing all the required stuff
const express = require("express");
const cors = require("cors");
const { PORT, connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { taskRouter } = require("./routes/task.routes");
const app = express();

// In-built middlewares
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("task", taskRouter);

// Routes
app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<div><h1>Welcome to the Task Management API </h1><br /> <h2>- by Sohel Syed.</h2></div>"
    );
});

// Listening to the server
app.listen(PORT, connection);
