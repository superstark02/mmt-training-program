const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");

const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.addmessage = onRequest(async (req, res) => {
  const original = req.query.text;
  
  const writeResult = await getFirestore()
      .collection("messages")
      .add({original: original});

  res.json({result: `Message with ID: ${writeResult.id} added.`});
});