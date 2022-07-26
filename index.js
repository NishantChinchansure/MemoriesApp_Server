import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

// https://www.mongodb.com/cloud/atlast
// mongodb+srv://nishant1999:<password>@cluster0.ugwqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const CONNECTION_URL =
  "mongodb+srv://nishant1999:nishant1999@cluster0.ugwqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
  )
  .catch((error) => console.log(`Error while connecting ${error.message}`));

// mongoose.set('useFindAndModify', false);
