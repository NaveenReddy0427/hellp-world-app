import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World App from AWS with Jenkins CI/CD!");
});


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening at PORT ${PORT}`);
});
