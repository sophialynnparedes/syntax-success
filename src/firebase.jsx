import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithRedirect,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,

    authDomain: "syntax-success.firebaseapp.com",

    projectId: "syntax-success",

    storageBucket: "syntax-success.appspot.com",

    messagingSenderId: "975216978443",

    appId: "1:975216978443:web:fd3b903a173023de7af50e",

    measurementId: "G-4C3Z2Z1PX1",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const googleLogin = async () => {
    try {
        const res = await signInWithRedirect(auth, googleProvider);
        const user = res.user;
        await setDoc(
            doc(db, "users", user.uid),
            { uid: user.uid },
            { merge: true }
        );
    } catch (error) {
        alert(error.message);
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        alert(error.message);
    }
};
