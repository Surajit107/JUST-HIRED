const express =require("express");
const path = require("path");
const session = require("express-session");
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// app.use(express.static(path.join(__dirname, "public")))
// app.use(session({
//     cookie:{maxAge: 50000},
//     secret: "chandan_surajit",
//     resave: false,
//     saveUninitialized: false,
// }));

// app.use(flash());
// app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", "views");

const userRouter = require("./route/userRoute");
app.use("/api/user", userRouter);

mongoose.connect(process.env.DB_CONN, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(res => app.listen(process.env.PORT, () => console.log(`Server Running at http://localhost:${process.env.PORT}`)))
    .catch(err => console.log(err))