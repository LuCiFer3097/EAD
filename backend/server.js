const express = require("express");
const connectDB = require("./config/db");
const app = express();

//connect databse
connectDB();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// const cors = require("cors");
// app.use(cors());

//define routes

app.use("/api/check-user", require("./routes/api/users"));

app.use("/api/signup/farmer", require("./routes/api/farmer/users"));
app.use("/api/signup/company", require("./routes/api/delivery/companyuser"));
app.use("/api/signup/user", require("./routes/api/genuser/user"));
app.use("/api/login/user", require("./routes/api/genuser/auth"));
app.use("/api/login/farmer", require("./routes/api/farmer/auth"));
app.use("/api/login/company", require("./routes/api/delivery/companyLogin"));
app.use("/api/profile/farmer", require("./routes/api/farmer/profile"));
app.use(
  "/api/profile/company",
  require("./routes/api/delivery/companyProfile")
);
app.use("/restricted", require("./routes/api/info"));
app.use("/api/crops", require("./routes/api/farmer/get_info"));
app.use("/api/farmer", require("./routes/api/farmer/activity"));
app.use("/api/user", require("./routes/api/genuser/activity"));
app.use("/api/filter", require("./routes/api/catalog"));
// app.use("/api/upload", require("./routes/api/upload"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server start on post ${PORT}`));
