const admin = require("firebase-admin");
const serviceAccount = require("./firebaseKey.json");
const logger = require("firebase-functions/logger");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://devdialog-da654.firebaseio.com",
});

const db = admin.firestore();
module.exports = { db, logger, admin };
