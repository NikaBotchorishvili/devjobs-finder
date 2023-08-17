import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

const PORT = process.env.PORT

const app = express();

app.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`)
})

app.get("/", (req, res) => {
    res.send("Hello World");
})