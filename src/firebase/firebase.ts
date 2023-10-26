import { initializeApp , getApp , getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDuUWuCMi-9w4rgubtLGwNbH1gFfNu5-8w",
  authDomain: "sammi-auth-77269.firebaseapp.com",
  projectId: "sammi-auth-77269",
  storageBucket: "sammi-auth-77269.appspot.com",
  messagingSenderId: "914270213771",
  appId: "1:914270213771:web:0426f6c92f18aa47d5268e",
  measurementId: "G-6HHK8DWC80"
};


const app =  !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const auth = getAuth()

export default app

export {db , auth}