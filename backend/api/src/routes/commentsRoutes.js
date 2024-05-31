const express = require("express");
const commentsRouter = express.Router();
const { db, logger, admin } = require("../config/firebase");

const commentsCollection = admin.firestore().collection("comments");

commentsRouter.put("/:uid", async (req, res) => {
  try {
    await commentsCollection.doc(req.params.uid).update({
      post_uid: req.body.post_uid,
      user_uid: req.body.user_uid,
      text: req.body.text,
    });

    return res.status(200).send({ message: "Comment updated successfully" });
  } catch (error) {
    logger.error("Error updating comment:", error);
    return res.status(500).send({ error: error.message });
  }
});

commentsRouter.delete("/:uid", async (req, res) => {
  try {
    await commentsCollection.doc(req.params.uid).delete();
    return res.status(200).send({ message: "Comment deleted successfully!" });
  } catch (error) {
    logger.error("Error deleting comment:", error);
    return res.status(500).send({ error: error.message });
  }
});

commentsRouter.get("/", async (req, res) => {
  try {
    const snapshot = await commentsCollection.get();
    const comments = [];

    snapshot.forEach((doc) => {
      comments.push({ id: doc.id, data: doc.data() });
    });

    return res.status(200).send(comments);
  } catch (error) {
    logger.error("Error getting commments:", error);
    return res.status(500).send({ error: error.message });
  }
});

commentsRouter.post("/", async (req, res) => {
  const { post_uid, user_uid, text } = req.body;

  try {
    await db.collection("comments").doc().set({
      created_at: new Date(),
      post_uid: post_uid,
      user_uid: user_uid,
      text: text,
    });

    return res.status(200).send({ message: "Comment created successfully!" });
  } catch (error) {
    logger.error("Error creating comment:", error);
    return res.status(500).send({ error: error.message });
  }
});

commentsRouter.get("/:uid", async (req, res) => {
  try {
    const comment = await commentsCollection.doc(req.params.uid).get();
    return res.status(200).send({
      uid: comment.id,
      data: comment.data(),
    });
  } catch (error) {
    logger.error("Error getting comment:", error);
    return res.status(500).send({ error: error.message });
  }
});

module.exports = commentsRouter;
