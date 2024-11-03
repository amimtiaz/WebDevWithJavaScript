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


//PROJECT
/assets
  └── /Components
      ├── Layout.jsx          # Main layout component containing shared elements like Navbar.
      ├── Home.jsx            # Homepage component.
      ├── Products.jsx        # Products page component.
      ├── Login.jsx           # Login form with social login options.
      ├── Register.jsx        # Registration form with terms & conditions agreement.
      ├── Contact.jsx         # Contact page component.
      ├── TermsAndCondition.jsx # Terms and Conditions page component.

index.css                     # Main CSS file for styling.
main.jsx                      # Main entry file that sets up routing with react-router-dom.


  
## Component Code

### `main.jsx`
```javascript
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from './assets/Components/Layout.jsx';
import Home from './assets/Components/Home.jsx';
import Products from './assets/Components/Products.jsx';
import Login from './assets/Components/Login.jsx';
import Register from './assets/Components/Register.jsx';
import Contact from './assets/Components/Contact.jsx';
import TermsAndCondition from './assets/Components/TermsAndCondition.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> }, 
      { path: '/contact', element: <Contact /> },
      { path: '/termscondition', element: <TermsAndCondition /> }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

//Home.jsx
const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home;

//Login.jsx
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Login = () => {
    return (
        <div>
            <form className="border w-1/2 mx-auto my-auto mt-20 my-6 p-6 shadow-sm rounded-lg">
                <h2 className="text-center mb-5 font-bold text-2xl">Login</h2>
                <input className="bg-gray-100 rounded-lg block w-full p-2 mb-2" type="email" placeholder="Email" /> 
                <input className="bg-gray-100 rounded-lg block w-full p-2" type="password" placeholder="Password" /> 

                <div className="flex justify-between mt-4">
                    <div>
                        <input className="mr-2" type="checkbox" id="forChecked" />
                        <label htmlFor="forChecked">Show Password</label>
                    </div>
                    <p className="text-cyan-400 hover:text-cyan-500 hover:underline">
                        <Link to="/forgot-password">Forgot Password</Link>
                    </p>
                </div>

                <input className="cursor-pointer block w-full transition-all bg-cyan-400 text-white p-2 hover:bg-cyan-500 rounded-md mt-4" type="submit" value="Login" />

                <div className="flex justify-center mt-4 my-4 items-center">
                    <hr className="border-gray-400 w-1/4 mr-2" /> 
                    <span className="font-bold">Or Continue With</span>
                    <hr className="border-gray-400 w-1/4 ml-2"/>
                </div>

                <p className="border mb-3 w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <button className="flex items-center gap-2">  
                        <FaGoogle /> 
                        <span>Login with Google</span>
                    </button>
                </p>

                <p className="border w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer mb-3">
                    <button className="flex items-center gap-2">  
                        <FaFacebookF />  
                        <span>Login with Facebook</span>
                    </button>
                </p>

                <p className="border mb-3 w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
                    <button className="flex items-center gap-2">  
                        <FiGithub />
                        <span>Login with GitHub</span>
                    </button>
                </p>

                <p className="text-center mt-8">Don't have an account? <Link to={'/register'} className="text-cyan-400 hover:text-cyan-500 hover:underline">Sign Up / Register</Link></p>
            </form>
        </div>
    );
}

export default Login;

//Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-100 py-4'>
        <div>
            <h2>CoderVive</h2>
        </div>
        <div>
            <ul className='flex'>
                <li className="mx-3"><Link to={'home'}>Home</Link></li>
                <li className="mx-3"><Link to={'products'}>Products</Link></li>
                <li className="mx-3"><Link to={'login'}>Login</Link></li>
                <li className="mx-3"><Link to={'register'}>Sign Up</Link></li>
                <li className="mx-3"><Link to={'contact'}>Contact</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;


//Register.jsx
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Register = () => {
  return (
    <div>
      <form className="border w-1/2 mx-auto my-auto mt-20 my-6 p-6 shadow-sm rounded-lg">
          <h2 className="text-center mb-5 font-bold text-2xl">Register</h2>
          <input className="bg-gray-100 rounded-lg block w-full p-2 mb-2" type="text" placeholder="Name" /> 
          <input className="bg-gray-100 rounded-lg block w-full p-2 mb-2" type="email" placeholder="Email" /> 
          <input className="bg-gray-100 rounded-lg block w-full p-2" type="password" placeholder="Enter Password" />
          <input className="mt-2 bg-gray-100 rounded-lg block w-full p-2" type="password" placeholder="Confirm Password" /> 

          <div className="flex justify-between mt-4">
              <div>
                  <input className="mr-2" type="checkbox" id="forChecked" />
                  <label htmlFor="forChecked">Show Password</label>
              </div>
              <p className="hover:underline">
                  <input className="mr-2" type="checkbox" id="termsAndCondition" />
                  <label htmlFor="termsAndCondition">I agree to the <Link className="text-cyan-400" to={'/termscondition'}>Terms & Conditions!</Link></label>
              </p>
          </div>

          <input className="cursor-pointer block w-full transition-all bg-cyan-400 text-white p-2 hover:bg-cyan-500 rounded-md mt-4" type="submit" value="Sign Up" />

          <div className="flex justify-center mt-4 my-4 items-center">
              <hr className="border-gray-400 w-1/4 mr-2" /> 
              <span className="font-bold">Or Continue With</span>
              <hr className="border-gray-400 w-1/4 ml-2"/>
          </div>

          <p className="border mb-3 w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <button className="flex items-center gap-2">  
                  <FaGoogle /> 
                  <span>Login with Google</span>
              </button>
          </p>

          <p className="border w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer mb-3">
              <button className="flex items-center gap-2">  
                  <FaFacebookF />  
                  <span>Login with Facebook</span>
              </button>
          </p>

          <p className="border mb-3 w-1/2 mx-auto p-1 rounded-lg bg-gray-100 hover:bg-gray-200 cursor-pointer">
              <button className="flex items-center gap-2">  
                  <FiGithub />
                  <span>Login with GitHub</span>
              </button>
          </p>

          <p className="text-center mt-8">Already have an account? <Link to={'/login'} className="text-cyan-400 hover:text-cyan-500 hover:underline">Login</Link></p>
      </form>
    </div>
  );
}

export default Register;


