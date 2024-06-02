const express = require("express");
const authRouter = express.Router();
const { db, logger, admin } = require("../config/firebase");

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Missing email or password");
  }
  try {
    const userExists = await admin.auth().getUserByEmail(email);
    const token = await admin.auth().createCustomToken(userExists.uid);
    return res.status(200).send({ token });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
});

module.exports = authRouter;
