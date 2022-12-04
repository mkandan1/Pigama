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

const adminIntialize = admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.PROJECT_ID,
        privateKey: process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY.replace(/\\n/gm, "\n") : undefined,
        clientEmail: process.env.CLIENT_EMAIL,
    }),
    databaseURL: process.env.DATABASE_URL
});

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
const db = getDatabase(adminIntialize);


app.get('/test', (req, res) => {
    res.json({ 'name': 'Hello, World!' })
})


function writeUserData(uid, name, email, number, role) {

    getDatabase(adminIntialize).ref('Users').child(uid).set({
        name: name,
        email: email,
        number: number,
        role: role
    })
}
function writeAdmin(uid, name, email) {
    getDatabase(adminIntialize).ref('Admins').child(uid)
        .set({
            name: name,
            email: email,
        });
}
function writeTester(uid, name, email) {
    getDatabase(adminIntialize).ref('Testers').child(uid)
        .set({
            name: name,
            email: email,
        });
}

app.post('/createUserAccount', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const number = req.body.number;
    const role = req.body.role;
    const reference = req.body.reference;

    const userData = { name: name, email: email, emailVerified: false, displayName: name, password: pass, disabled: false, number: number, role: role, reference: reference }

    getAuth().createUser(
        userData

    )
        .then((UserRecord) => {
            const uid = UserRecord.uid;
            const name = userData.name;
            const email = UserRecord.email;
            const number = userData.number;
            const role = userData.role
            writeUserData(uid, name, email, number, role)
            if (role == 'Admin'){
                writeAdmin(uid, name, email)
            }
            if(role== 'Tester'){
                writeTester(uid, name, email)
            }

        })
        .catch((error) => {
            console.log(error);
        })
})

app.post('/admin/login', (req, res)=>{
    const admin_email = req.body.admin_email
    const admin_password = req.body.admin_password
    console.log(admin_email);

    let response;

    getAuth()
    .getUserByEmail(admin_email).then(
        (UserRecord)=>{
            const uid = UserRecord.uid;
            const ref = db.ref('Admins/'  + uid);
            ref.once('value').then(result=>{
                console.log(result.key);
                response ={ user: result.key}
            }).catch((error)=>{
                console.log(error);
                response ={ error: error.code, error_message: error.message}
            })
            
        }
    )
    .catch((error)=>{
        console.log(error);
        res.err
    })

    
})

app.get('/getAdminDetails', (req, res)=>{

})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});