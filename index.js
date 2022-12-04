import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase-admin/database";
import { getAuth, UserRecord } from 'firebase-admin/auth'

const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.PRODUCTION_LINK
}));

const port = 8800;
app.use(express.json());


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};

const FirebaseInitialize = initializeApp(firebaseConfig)


app.get('/test', (req, res) => {
    res.send(JSON.stringify({ 'name': 'Hello, World!' }))
})



app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});