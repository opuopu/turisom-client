import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged,signOut,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initalizes from "./init";

initalizes()
const Usefirebase = () =>{
//    state
    const [user,setuser] = useState({})
    const [loading,setloading] = useState(true)
    const [error,seterror] = useState('')

    // console.log(user);
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    // google sign in
    const googlesign = () =>{
      setloading(true)
return signInWithPopup(auth,provider)
// .then(result=>{
//     const user = result.user 
//     setuser(user)
//     seterror('')
// })
.catch(error=>{
    seterror("something went wrong")
})
.finally(()=>setloading(false))

    }
    //  onauthchange
    useEffect(()=>{
    
      
        onAuthStateChanged(auth,user=>{
            if(user){
                setuser(user)
            }
            else{
                setuser({})
               
            }
            setloading(false)
        })
      
    },[])
   
   
  
 
//  sign in user with email and password


   
    // signout
    const logout = () =>{
       setloading(true)
        signOut(auth)
        .then(()=>{
setuser({})
        })
        .catch(error=>{
seterror("an error")
        })
        .finally(()=>setloading(false))
    }

   
    return {user,googlesign,logout,loading,error,auth,setuser,seterror,setloading,updateProfile,}
}
export default Usefirebase