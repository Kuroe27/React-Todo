import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

import App from "../App";
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
    <div>
      {value ? (
        <App />
      ) : (
        <button onClick={handleClick}>Signin With Google</button>
      )}
    </div>
  );
}

export default SignIn;
