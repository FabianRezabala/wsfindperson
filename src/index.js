require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.use("/", require("./routes"));

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
});
