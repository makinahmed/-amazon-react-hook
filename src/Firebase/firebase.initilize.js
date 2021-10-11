import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initilizeFirebaseApp = () => initializeApp(firebaseConfig);

export default initilizeFirebaseApp;