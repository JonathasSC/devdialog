const express = require("express");
const postsRouter = express.Router();
const { db, logger, admin } = require("../config/firebase");

const postCollection = admin.firestore().collection("posts");

postsRouter.get("/", async (req, res) => {
  try {
    const snapshot = await postCollection.get();
    const posts = [];

    snapshot.forEach((doc) => {
      posts.push({ id: doc.id, data: doc.data() });
    });

    return res.status(200).send(posts);
  } catch (error) {
    logger.error("Error getting users:", error);
    return res.status(500).send({ error: error.message });
  }
});

postsRouter.put("/:uid", async (req, res) => {
  const { user_uid, title, description } = req.body;
  try {
    await postCollection.doc(req.params.uid).update({
      user_uid: user_uid,
      title: title,
      description: description,
    });

    return res.status(200).send({ message: "Post updated successfully" });
  } catch (error) {
    logger.error("Error updating post:", error);
    return res.status(500).send({ error: error.message });
  }
});

postsRouter.post("/", async (req, res) => {
  const { user_uid, title, description } = req.body;

  try {
    await db.collection("posts").doc().set({
      created_at: new Date(),
      user_uid: user_uid,
      title: title,
      description: description,
    });

    return res.status(200).send({ message: "Post created successfully!" });
  } catch (error) {
    logger.error("Error creating post:", error);
    return res.status(500).send({ error: error.message });
  }
});

postsRouter.delete("/:uid", async (req, res) => {
  try {
    await postCollection.doc(req.params.uid).delete();
    return res.status(200).send({ message: "Post deleted successfully!" });
  } catch (error) {
    logger.error("Error deleting post:", error);
    return res.status(500).send({ error: error.message });
  }
});

postsRouter.get("/:uid", async (req, res) => {
  try {
    const comment = await postCollection.doc(req.params.uid).get();
    return res.status(200).send({
      uid: comment.id,
      data: comment.data(),
    });
  } catch (error) {
    logger.error("Error getting post:", error);
    return res.status(500).send({ error: error.message });
  }
});

module.exports = postsRouter;
