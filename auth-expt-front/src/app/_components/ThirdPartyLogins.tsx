"use client";
import { signInWithGoogle } from "../../../auth";

export default function ThirdPartyLogins() {
  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      console.log("Login successful!");
    } catch (error) {
      console.error("Login error ::", error);
    }
  };
  return (
    <>
      <button onClick={handleGoogleLogin}>Login with Google</button>
    </>
  );
}
