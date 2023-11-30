import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { FIREBASE_API_KEY } from "@/components/app-constants";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
