import { doc } from "firebase/firestore";
import { db } from "../firebase";
import { userConverter } from "./userConverter";

export const userRef = (uid: string) => doc(db, "users", uid).withConverter(userConverter);