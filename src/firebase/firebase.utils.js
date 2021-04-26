import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//get from Firebase config
const config = {
    apiKey: "AIzaSyB_PRNeTdAqgSZbTr6p_4Zs5fjTmV9csn8",
    authDomain: "crwn-db-9dbdd.firebaseapp.com",
    databaseURL: "https://crwn-db-9dbdd-default-rtdb.firebaseio.com",
    projectId: "crwn-db-9dbdd",
    storageBucket: "crwn-db-9dbdd.appspot.com",
    messagingSenderId: "788648740175",
    appId: "1:788648740175:web:4b6043f3a3795ee732b13a",
    measurementId: "G-SG677H99FM",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
