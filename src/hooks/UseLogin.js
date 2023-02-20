import { useEffect, useState } from "react";
import { projectAuth} from "../firebase/config";
import { useAuthContext } from "./UseAuthContext";

export function UseLogin() {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    async function login(email, password) {
        setError(null)
        try {

            const res = await projectAuth.signInWithEmailAndPassword(email, password)


            dispatch({ type: 'LOGIN', payload: res.user })

            if (!isCancelled) {
                setIsPending(false)
                setError(null)
            }
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message)
                setError(err.message)
                setIsPending(false)
            }
        }

    }

    useEffect(() => {
        return () => {
            setIsCancelled(true)
        }
    }, [])
    return { error, login }
}