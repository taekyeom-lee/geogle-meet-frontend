import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyBroe5SIVLSA-6VsiZyAbDBxNj2rFl4FXQ",
  authDomain: "geogle-meet.firebaseapp.com",
  projectId: "geogle-meet",
  storageBucket: "geogle-meet.appspot.com",
  messagingSenderId: "880975666755",
  appId: "1:880975666755:web:c40a8f68a2d90d8e3b7ef6"
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.email}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;