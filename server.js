const express = require("express");
const http = require("http");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const router = require("./router");
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);

app.use(router);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    success: false,
    message: error.message,
  });
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));
