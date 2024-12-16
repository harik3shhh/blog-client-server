require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn")
const authRoute = require('./routes/auth-route');
const categoryRoute = require("./routes/category-route");
const blogRoute = require("./routes/blog-route");
const formidable = require("express-formidable");
const cors = require("cors");

const PORT = process.env.PORT;

const corsOptions = {
    origin: "*",
    methods: "GET, POST, PUT, DELETE, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth/", authRoute);
app.use("/api/v1/category", categoryRoute);
app.use(formidable());
app.use("/api/v1/blog", blogRoute);


app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});
