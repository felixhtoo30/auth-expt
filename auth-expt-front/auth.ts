// auth.ts
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from "./firebaseConfig";

export const signInWithGoogle = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();

  try {
    // const result = await auth.signInWithPopup(provider);
    const result = await signInWithPopup(auth, provider);

    // User signed in successfully
    const user: User = result.user;
    const token: string = await user.getIdToken();

    console.log("User signed in:", user);
    console.log("Token:", token);
    await fetch("http://localhost:3500/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
  } catch (error) {
    // Handle errors here
    console.error(error);
  }
};
