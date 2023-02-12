const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const machine = require("./models/machine.js");
const app = express();
const machineRoutes = require("./routes/machine.js");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/machines", machineRoutes);

const PORT = process.env.PORT || 3001;

const URL =
  "mongodb+srv://travisha:travisha123@cluster0.cbt2zfn.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((e) => console.log(e.message));

app.listen(PORT, () => console.log("server started on 3001"));
