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



//Component
// SignInWithFacebookBtn Component
// Create a new file named SignInWithFacebookBtn.js and paste this code.
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { app } from "../../../Firebase/firebaseInit";
import { useState } from "react";

const SignInFacebook = () => {
    const auth = getAuth(app);
    const provider = new FacebookAuthProvider();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);

    const facebookLogingBtn = () => {
        setLoading(true);
        setError(""); // Reset error state

        signInWithPopup(auth, provider)
            .then((result) => {
                const userInfo = result.user;
                setUser(userInfo);
                console.log(userInfo.displayName);
            })
            .catch((error) => {
                console.error(error);
                setError(error.message); // Display error message to the user
            })
            .finally(() => {
                setLoading(false); // Reset loading state
            });
    };

    return (
        <div>
            <button onClick={facebookLogingBtn} disabled={loading}>
                {loading ? "Signing In..." : "Sign In With Facebook"}
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {user && (
                <div>
                    <h2>Welcome, {user.displayName}!</h2>
                    {user.photoURL && <img src={user.photoURL} alt="User Photo" />}
                </div>
            )}
        </div>
    );
};

export default SignInFacebook;


//Component
// SignInWithGitHubBtn Component
// Create a new file named SignInWithGitHubBtn.js and paste this code.
import { getAuth, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import { app } from "../../../Firebase/firebaseInit";
import { useState } from "react";

const SignInWithGitHubBtn = () => {
    const [userInfo, setUserInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const auth = getAuth(app);
    const provider = new GithubAuthProvider();

    const handleGitHubBtn = () => {
        setLoading(true);
        setError(""); // Reset error state

        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user; // Get user directly from result
                setUserInfo(user);
                console.log(user); // Log the user information here
            })
            .catch((error) => {
                console.log(error);
                setError(error.message); // Set error message to display
            })
            .finally(() => {
                setLoading(false); // Reset loading state
            });
    };

    const handleLogout = () => {
        setLoading(true);
        setError(""); // Reset error state

        signOut(auth)
            .then(() => {
                setUserInfo(null); // Clear user information on logout
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.log(error);
                setError(error.message); // Set error message to display
            })
            .finally(() => {
                setLoading(false); // Reset loading state
            });
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    <h2>Welcome, {userInfo.displayName}!</h2>
                    {userInfo.photoURL && (
                        <img
                            style={{ width: "100px", height: "100px" }}
                            src={userInfo.photoURL}
                            alt="User Photo"
                        />
                    )}
                    <button onClick={handleLogout} disabled={loading}>
                        {loading ? "Logging Out..." : "Logout"}
                    </button>
                </div>
            ) : (
                <h2>Please sign in</h2>
            )}
            {!userInfo && (
                <button onClick={handleGitHubBtn} disabled={loading}>
                    {loading ? "Signing In..." : "Sign In With GitHub"}
                </button>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default SignInWithGitHubBtn;
