import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBSFQnc0yQp-ODTPedK2XZEl4F_sW9I4j8",
  authDomain: "travelliss.firebaseapp.com",
  projectId: "travelliss",
  storageBucket: "travelliss.appspot.com",
  messagingSenderId: "925932556781",
  appId: "1:925932556781:web:6f4bcd218220e58a4b57e4"
};

  //init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFirestore = firebase.firestore()

//firebaseStorage
const projectStorage = firebase.storage()

//init firebase auth
const projectAuth = firebase.auth()

const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, projectStorage, timestamp}