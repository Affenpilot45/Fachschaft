import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnXalNdrRxxLLIF5b6G2TH_l2zCvelfOM",

    authDomain: "webengineering-25884.firebaseapp.com",
  
    databaseURL: "https://webengineering-25884-default-rtdb.europe-west1.firebasedatabase.app",
  
    projectId: "webengineering-25884",
  
    storageBucket: "webengineering-25884.appspot.com",
  
    messagingSenderId: "544226510115",
  
    appId: "1:544226510115:web:f4531de61da42b679e3896"
  
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase