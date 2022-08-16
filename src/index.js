const express = require("express");
var cors = require("cors");
const app = express();
const indexRouter = require("./routers/indexRouter");

app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);

app.use("/api", indexRouter);

app.listen(5000, () => {
  console.log("server started oon port 5000");
});
