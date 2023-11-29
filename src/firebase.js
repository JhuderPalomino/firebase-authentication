import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'TU_API_KEY',
  authDomain: 'TU_DOMINIO.firebaseapp.com',
  projectId: 'TU_ID_DE_PROYECTO',
  storageBucket: 'TU_BUCKET.appspot.com',
  messagingSenderId: 'TU_ID_DE_MENSAJERÍA',
  appId: 'TU_APP_ID',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default auth;
