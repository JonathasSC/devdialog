const usersRouter = require("./routes/usersRoutes.js");
const commentsRouter = require("./routes/commentsRoutes.js");
const postsRouter = require("./routes/postsRoutes.js");
const authRouter = require("./routes/authRoutes.js");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }));

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/comments", commentsRouter);

module.exports = app;
