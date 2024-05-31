const express = require("express");
const usersRouter = express.Router();
const { db, logger, admin } = require("../config/firebase");

const usersCollection = admin.firestore().collection("users");

usersRouter.put("/:uid", async (req, res) => {
  try {
    const usedEmail = await usersCollection
      .where("email", "==", req.body.email)
      .get();

    if (!usedEmail.empty) {
      return res.status(400).send({ message: "Email already in use" });
    }

    await usersCollection.doc(req.params.uid).update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    return res.status(200).send({ message: "User updated successfully" });
  } catch (error) {
    logger.error("Error updating user:", error);
    return res.status(500).send({ error: error.message });
  }
});

usersRouter.delete("/:uid", async (req, res) => {
  try {
    await usersCollection.doc(req.params.uid).delete();
    return res.status(200).send({ message: "User deleted successfully!" });
  } catch (error) {
    logger.error("Error deleting user:", error);
    return res.status(500).send({ error: error.message });
  }
});

usersRouter.get("/", async (req, res) => {
  try {
    const snapshot = await usersCollection.get();
    const users = [];

    snapshot.forEach((doc) => {
      users.push({ id: doc.id, data: doc.data() });
    });

    return res.status(200).send(users);
  } catch (error) {
    logger.error("Error getting users:", error);
    return res.status(500).send({ error: error.message });
  }
});

usersRouter.post("/", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const userRecord = await admin.auth().createUser({
      email: email,
      password: password,
      name: name,
    });
    const uid = userRecord.uid;

    await db.collection("users").doc(uid).set({
      name: name,
      email: email,
      password: password,
    });

    return res.status(200).send({ message: "User created successfully!", uid });
  } catch (error) {
    logger.error("Error creating user:", error);
    return res.status(500).send({ error: error.message });
  }
});

usersRouter.get("/:uid", async (req, res) => {
  try {
    const user = await usersCollection.doc(req.params.uid).get();
    return res.status(200).send({
      uid: user.id,
      data: user.data(),
    });
  } catch (error) {
    logger.error("Error getting user:", error);
    return res.status(500).send({ error: error.message });
  }
});

module.exports = usersRouter;
