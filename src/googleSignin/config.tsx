import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAMzCmCMsLOZCJJ7QCMYYSf-6w0Dqmcj28",
  authDomain: "messaging-app-cb577.firebaseapp.com",
  projectId: "messaging-app-cb577",
  storageBucket: "messaging-app-cb577.appspot.com",
  messagingSenderId: "142580634685",
  appId: "1:142580634685:web:92b5570570e76adca68654",
  measurementId: "G-Q0WFFCVBG0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
