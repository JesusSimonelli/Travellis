import { useEffect, useState } from "react";
import { projectAuth, projectFirestore, projectStorage } from "../firebase/config";
import { useAuthContext } from "./UseAuthContext";

export function UseSignup() {
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()

    async function signup(email, password, displayName, thumbnail) {
        setError(null)
        setIsPending(true)

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)


            if (!res) {
                throw new Error('Could not complete signup')
            }

            //upload custumer thumbanil
            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`
            const img =  await projectStorage.ref(uploadPath).put(thumbnail)
            const imgUrl = await img.ref.getDownloadURL()

            //add display name to user
            await res.user.updateProfile({ displayName, photoURL:imgUrl})

            //create a user document
            await projectFirestore.collection('users').doc(res.user.uid).set({
                displayName,
                photoURL: imgUrl
            })

            //dispatch login action  
            dispatch({ type: 'LOGIN', payload: res.user })

            //update status
            if (!isCancelled) {
                setIsPending(false)
                setError(false)
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

    return { error, isPending, signup }

}