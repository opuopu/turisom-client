import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initalizes = () =>{
    return initializeApp(firebaseConfig);
}
export default initalizes