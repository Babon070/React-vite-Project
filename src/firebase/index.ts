import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtBKww91hEXQji6Q03mVHwrDvETB9Fsl8",
  authDomain: "gym-training-dc827.firebaseapp.com",
  projectId: "gym-training-dc827",
  storageBucket: "gym-training-dc827.firebasestorage.app",
  messagingSenderId: "949905699253",
  appId: "1:949905699253:web:016adaf0a137af277d29fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }