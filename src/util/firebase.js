
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCwyfMWoe81vQzn_fd8T4DlojYt-bW9AVA",
  authDomain: "listeddashboard-b837f.firebaseapp.com",
  projectId: "listeddashboard-b837f",
  storageBucket: "listeddashboard-b837f.appspot.com",
  messagingSenderId: "972375119349",
  appId: "1:972375119349:web:828d33a748d935573ebcbc"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)