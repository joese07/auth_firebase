import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6F20bNGCWoQS2398lfPCOenClHBi8KP0",
  authDomain: "joese-binar-chapter-9.firebaseapp.com",
  projectId: "joese-binar-chapter-9",
  storageBucket: "joese-binar-chapter-9.appspot.com",
  messagingSenderId: "178361807945",
  appId: "1:178361807945:web:6ba88253bb4ea5862b7b98",
  measurementId: "G-PV92LTQ40T",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
