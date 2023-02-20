import { isSignInWithEmailLink } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

export function useAuthContext(){
    const context = useContext(AuthContext)

    if(!context){
        throw Error('useAuthContext must be inside an AuthContextProvider')
    }
    return context
}