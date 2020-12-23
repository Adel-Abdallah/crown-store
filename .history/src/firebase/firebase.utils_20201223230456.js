import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBLUbt31iqHLTFTpXxw4GrP8jm30dSJILI",
    authDomain: "crown-db-251b7.firebaseapp.com",
    projectId: "crown-db-251b7",
    storageBucket: "crown-db-251b7.appspot.com",
    messagingSenderId: "768915476139",
    appId: "1:768915476139:web:da93190c81089bcd5f71ee",
    measurementId: "G-SLF2D5PSKB"
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
© 2020 GitHub, Inc.