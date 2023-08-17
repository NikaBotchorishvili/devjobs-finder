import dotenv from "dotenv";
dotenv.config();

import express from "express";

const PORT = process.env.PORT

const app = express();

app.listen(PORT, () => {
    console.log(`listening on PORT:${PORT}`)
})

app.get("/", (_req, res) => {
    res.send("Hello World");
})