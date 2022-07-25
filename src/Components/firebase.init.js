/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrGYIO-E4DqwIg9mQ8jreShXNqnmKPwaA",
  authDomain: "internshalatask-470a6.firebaseapp.com",
  projectId: "internshalatask-470a6",
  storageBucket: "internshalatask-470a6.appspot.com",
  messagingSenderId: "843305843723",
  appId: "1:843305843723:web:c2595413bb668c2f081b0e",
  measurementId: "G-VVYVNGY29V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
