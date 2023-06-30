import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

import Home from "../pages/Home";
import { auth, provider } from "./config";

function SignIn() {
  const [value, setValue] = useState<string | null>(null);

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
        <button
          className="border-2 border-zinc-400 p-2 text-black hover:bg-gray-800 hover:text-white"
          onClick={handleClick}
        >
          Signin With Google
        </button>
      )}
    </>
  );
}

export default SignIn;
