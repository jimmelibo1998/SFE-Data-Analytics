const express = require("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

// connect to database
connectDB();

//body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/announcements", require("./routes/api/announcements"));
app.use("/api/dcr", require("./routes/api/dcr"));
app.use("/api/doctors", require("./routes/api/doctors"));
app.use("/api/masterlist", require("./routes/api/masterList"));
app.use("/api/medrep", require("./routes/api/medRep"));
app.use("/api/performance", require("./routes/api/performance"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening to port ${PORT}`));
