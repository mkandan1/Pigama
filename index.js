import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { initializeApp } from 'firebase/app';
const app = express();
dotenv.config();

app.use(cors({
    origin: process.env.PRODUCTION_LINK
}));

const port = 8800;
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


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
app.use(express.static(path.resolve(__dirname, 'client', 'build')));


app.get('/test', (req, res) => {
    res.send(JSON.stringify({ 'name': 'Hello, World!' }))
})


app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});