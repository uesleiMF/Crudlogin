import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAJP4IUUU_rf0OzXzg9RpyIa7BCoiaC0bI",
  authDomain: "my-project-1573688550820.firebaseapp.com",
  databaseURL: "https://my-project-1573688550820.firebaseio.com",
  projectId: "my-project-1573688550820",
  storageBucket: "my-project-1573688550820.appspot.com",
  messagingSenderId: "262871064067",
  appId: "1:262871064067:web:275ff13a2643c084607836",

};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
