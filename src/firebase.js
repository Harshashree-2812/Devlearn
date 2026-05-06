import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC7vFzMqDeEnHfI7FEYDMj9OLXRGuxCzzs",
  authDomain: "devlearn-17f75.firebaseapp.com",
  projectId: "devlearn-17f75",
  storageBucket: "devlearn-17f75.firebasestorage.app",
  messagingSenderId: "1065155485929",
  appId: "1:1065155485929:web:49250f50fa45290be11078"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)