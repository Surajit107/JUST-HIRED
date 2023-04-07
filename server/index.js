const express = require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();

// app.use("/public", express.static(path.join(__dirname, "./public", "uploads")))
app.use("/public", express.static("public"))

app.use(session({
    cookie: { maxAge: 50000 },
    secret: "chandan_surajit",
    resave: false,
    saveUninitialized: false,
}));

app.use(flash());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors())

// Admin Auth

// Admin Route
const adminRoute = require("./route/adminRoute");
app.use("/api/admin", adminRoute);

// user Auth
const userAuthJwt = require("./middleware/userAuthJwt");
app.use(userAuthJwt.authJwtSession)

// User Route
const userRouter = require("./route/userRoute");
app.use("/api/user", userRouter);

// Blog Route
const blogRouter = require("./route/blogRoute");
app.use("/api/blogs", blogRouter);

require('dotenv').config()

// console.log(process.env.DB_CONNECTION);

mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(process.env.PORT || 4402, () => console.log(`Server Running at ${process.env.HOST}`)), console.log("......Database Connected......"))
    .catch(err => console.log(err))