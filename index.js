import { initializeApp } from "firebase-admin/app";
import admin from "firebase-admin";
import { getDatabase } from "firebase-admin/database";
import { createRequire } from "module";
import { format } from "date-fns";
const require = createRequire(import.meta.url);
const serviceAccount = require("./ServiceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://spendwise-88451-default-rtdb.firebaseio.com",
});

const db = getDatabase();
const ref = db.ref("sms");
ref.on(
  "value",
  async (snapshot) => {
    const data = snapshot.val();
    const formattedData = {};

    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const sms = data[key];
        const formattedTimestamp = format(
          new Date(sms.timestamp),
          "dd-MM-yyyy HH:mm:ss"
        );
        formattedData[key] = {
          ...sms,
          formattedTimestamp,
        };
      }
    }

    const formattedRef = db.ref("formatted_sms");
    await formattedRef.set(formattedData);
    console.log("Formatted data saved successfully");
  },
  (errorObject) => {
    console.log("The read failed: " + errorObject.name);
  }
);
