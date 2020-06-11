const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hamsterwars-901b9.firebaseio.com",
  storageBucket: "hamsterwars-901b9.appspot.com"

});

const auth = admin.auth()
const db = admin.firestore()
const storage = admin.storage()


module.exports = { auth, db, storage }