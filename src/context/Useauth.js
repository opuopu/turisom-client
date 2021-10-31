import { useContext } from "react"
import { authcontext } from "./authprovider"


const  Useauth = () =>{
    return useContext(authcontext)
    }
    export default Useauth