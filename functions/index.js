/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51O2OPjDPSor05C16GqvYPUuptaR1VVI6mT9dISGPEmBCQcEGr6WmuiaDc8zOfXAkuUn1LDtTKJv4ZUFWYhROKUpO00VnN4PoTV')

//API



//App Config
const app = express();

//Middlewares
app.use(cors({ origin: true}));
app.use(express.json()); //allow us to send & Receive data as JSON format.

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
// app.get("/vivek", (request, response) => response.status(200).send("hello Vivek, what's up?"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received boom! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });
     
    // ok- created.
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });

});

//listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/challenge-e0ac9/us-central1/api -local api endpoint