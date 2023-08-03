import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg5SXiSuX5WAj8rdlqzEommlLuTi5HfEU",
  authDomain: "tango-time.firebaseapp.com",
  projectId: "tango-time",
  storageBucket: "tango-time.appspot.com",
  messagingSenderId: "102376466061",
  appId: "1:102376466061:web:702e8c9faac54691c1a4c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);