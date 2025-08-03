import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5001;

app.use(cors());
app.get("/", (req, res) => res.send("Hello , working here!!!"));

app.listen(PORT, () => console.log("Server is running on PORT ", PORT));
