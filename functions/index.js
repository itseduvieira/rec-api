const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()
const db = admin.firestore()

const settings = { timestampsInSnapshots: true };
db.settings(settings);

const user = functions.https.onRequest(async (request, response) => {
    const activation = await db.collection("activation").doc("38PUkPLR8MSPVmlkX0es").get()

    response.send(activation.data())
})

exports.user = user
