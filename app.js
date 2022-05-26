const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();

const PORT = 3030;

const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!!!",
});

app.use(limiter);

app.get("*", (req, res) => {
  console.log(res);
  res.status(200).json({
    message: "Hello from Server!!!",
  });
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
