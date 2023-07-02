import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";

import Home from "../pages/Home";
import { auth, provider } from "./config";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [logEmail, setLogEmail] = useState("");
  const [logPass, setLogPass] = useState("");
  const [value, setValue] = useState<string | null>(null);
  const handleregister = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, pass);
  };
  const handleLogin = async () => {
    const user = await signInWithEmailAndPassword(auth, logEmail, logPass);
  };
  const handleClick = async () => {
    try {
      const data = await signInWithPopup(auth, provider);
      if (data.user?.email) {
        setValue(data.user.email);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {value ? (
        <Home />
      ) : (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="signup ">
            <h1>SignUp</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
            <button onClick={handleregister}>Signup</button>
          </div>
          <div className="signin mt-10">
            <h1>SignIn</h1>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setLogEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Password"
              onChange={(e) => setLogPass(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
          <button
            className="border-2 border-zinc-400 p-2 text-black hover:bg-gray-800 hover:text-white mt-10"
            onClick={handleClick}
          >
            Signin With Google
          </button>
        </div>
      )}
    </>
  );
}

export default SignIn;
