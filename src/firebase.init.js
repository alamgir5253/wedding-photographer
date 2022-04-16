import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyBk44SqpuMqFRDM1QAoc7F1Kf66bRAtck8",
  authDomain: "wedding-photographer-3d9e5.firebaseapp.com",
  projectId: "wedding-photographer-3d9e5",
  storageBucket: "wedding-photographer-3d9e5.appspot.com",
  messagingSenderId: "309750669685",
  appId: "1:309750669685:web:5d4be4a7e2b43a46a2333c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;