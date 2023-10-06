import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import router from "./routes/testRoute.js";

dotenv.config();
const PORT = process.env.PORT || 2000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

