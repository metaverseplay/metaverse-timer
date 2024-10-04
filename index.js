const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: __dirname + "/.env" });
const app = express();
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");
const httpServer = http.createServer(app);
const moment = require("moment");
const allRoutes = require("./routes/Routes");
const { aviator_Start_function } = require("./controller/Aviator_Start");
const { generatedTimeEveryAfterEveryOneMin } = require("./controller");

const io = new Server(httpServer, {
  cors: {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  },
});
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
const PORT = process.env.PORT || 2000;
app.use(cors(corsOptions)); // Apply CORS middleware
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/v1", allRoutes);
io.on("connection", (socket) => {});

let x = true;
if (x) {
  console.log("Waiting for the next minute to start...");
  const now = new Date();
  const secondsUntilNextMinute = 60 - now.getSeconds();
  console.log(
    "start after ",
    moment(new Date()).format("HH:mm:ss"),
    secondsUntilNextMinute
  );
  setTimeout(() => {
    // allroutes.generatedTimeEveryAfterEveryOneMinTRX(io);
    generatedTimeEveryAfterEveryOneMin(io);
    aviator_Start_function(io);
    x = false;
  }, secondsUntilNextMinute * 1000);
}
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server is running on port 2343",
  });
});
// async function hii(params) {
//   const response =   await mailSender(
//     "vermaanand278@gmail.com",
//     `Dear, Anand`,
//     otpTemplate(123)
//   );
//   console.log(response);
// }
// hii()
httpServer.listen(PORT, () => {
  console.log("Server listening on port", PORT);
});
