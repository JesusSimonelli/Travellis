
import { useEffect, useReducer, useState } from 'react'
import {  projectFirestore, timestamp } from '../firebase/config'

let initialState ={
    document:null,
    isPending:false,
    error:null,
    succes:null
}

function firestoreReducer(state, action){
    switch (action.type){
        case 'IS_PENDING':
            return {isPending:true, document:null, succes:false, error:null}
        case 'ADDED_DOCUMENT':
            return {isPending:false, document:action.payload, succes:true, error:null}
        case 'DELETE_DOCUMENT':
            return {isPending:false, document:action.payload, succes:true, error:true}
        case 'UPDATE_DOCUMENT':
            return {isPending:false, document:action.payload, succes:true, error:true}
        case 'ERROR':
            return {isPending:false, document:null, succes:false, error:action.payload}
        default:
            return state
        
    }
}

export default function UseFirestore(c) {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled] = useState(false)

   const ref = projectFirestore.collection(c)

    function dispatchIfNotCancelled(action){
        if(!isCancelled){
            dispatch(action)
        }
    }

    async function addDocument(doc){
        dispatch({type: 'IS_PENDING'})

        try{
            const createAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({...doc, createAt})
            dispatchIfNotCancelled({type: 'ADDED_DOCUMENT', payload: addedDocument})
        }catch(err){
            dispatchIfNotCancelled({type: 'ERROR', payload: err.message})
        }
    }

    const updateDocuments = async (id, updates) => {
        dispatch({ type: 'IS_PENDING' })

        try {
            const updatedDocument = await ref.doc(id).update(updates)
            dispatchIfNotCancelled({ type: 'UPDATE_DOCUMENT', payload: updatedDocument })
            return updateDocuments
        } catch (err) {
            dispatchIfNotCancelled({ tyoe: 'ERROR', payload: err.message })
            return null
        }
    }

    useEffect(() => {
        return () => {
            setIsCancelled(true)
        }
    }, [])
  return { addDocument, updateDocuments, response}
}
