import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyClrMn1vt3JPuVc7ggTOeJESxYsPc8jONQ",
    authDomain: "ucamp-store-firebase.firebaseapp.com",
    projectId: "ucamp-store-firebase",
    storageBucket: "ucamp-store-firebase.appspot.com",
    messagingSenderId: "25276738493",
    appId: "1:25276738493:web:286524a073d85b96d700d4"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);