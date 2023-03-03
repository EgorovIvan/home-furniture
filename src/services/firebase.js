import { initializeApp } from "firebase/app"
import {getAuth} from "firebase/auth"
import { getDatabase} from "firebase/database";
const firebaseConfig = {
	apiKey: "AIzaSyDa4jo8Szb8pwxgZIyiUlvOsxghzJdFwuc",
	authDomain: "messenger-ca4a3.firebaseapp.com",
	databaseURL: "https://messenger-ca4a3-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "messenger-ca4a3",
	storageBucket: "messenger-ca4a3.appspot.com",
	messagingSenderId: "1055610102076",
	appId: "1:1055610102076:web:f05c5dc49f28b55c4a3e39",
	measurementId: "G-JG9PGRR15H"
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getDatabase(app)
