// First, install Firebase in your project
/* npm install firebase */

// Firebase Initialization
// Create a new file named firebaseInit.js under the 'src/Firebase' folder and paste this code.

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCadieDW7h2u1pTL2GesFM-cVgskL-Kjn0",
  authDomain: "fir-explore-d377e.firebaseapp.com",
  projectId: "fir-explore-d377e",
  storageBucket: "fir-explore-d377e.firebasestorage.app",
  messagingSenderId: "653992616351",
  appId: "1:653992616351:web:9f5f6aba07c5c455e55daa"
};

// Initialize Firebase app and make it exportable
export const app = initializeApp(firebaseConfig);


//Component
// SignInWithGoogleBtn Component
// Create a new file named SignInWithGoogleBtn.js and paste this code.

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/firebaseInit"; // Ensure the path is correct

const SignInWithGoogleBtn = () => {
    // Create a new GoogleAuthProvider instance
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    // Handle Google Sign-In Popup
    const signInBtnClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log("Signed in user:", user.displayName);
            })
            .catch((error) => {
                console.error("Error during sign-in:", error);
            });
    };

    return (
        <div>
            <button onClick={signInBtnClick}>Sign In With Google</button>
        </div>
    );
}

export default SignInWithGoogleBtn;

