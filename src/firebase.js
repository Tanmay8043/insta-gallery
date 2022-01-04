import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // enter your firebase config
};

const firebaseApp = initializeApp(firebaseConfig);
const auth= getAuth();
const db = getFirestore();
const storage = getStorage(firebaseApp);

export {firebaseApp, auth, db, storage};
