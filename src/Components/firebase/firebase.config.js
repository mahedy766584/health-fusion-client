import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC0Kdv0iycjm90OBuYWAvNdrUXrOjOvedg",
    authDomain: "healthfusion-4e69b.firebaseapp.com",
    projectId: "healthfusion-4e69b",
    storageBucket: "healthfusion-4e69b.appspot.com",
    messagingSenderId: "879574588936",
    appId: "1:879574588936:web:8cb1de6a1fa3fe2f56bbbd",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
