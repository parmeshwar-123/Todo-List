const express = require('express');
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT : ${PORT}`);
})