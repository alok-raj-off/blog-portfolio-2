// firebase-config.js
// Paste the values from Firebase Console > Project settings > Your apps > SDK setup.
// These values are safe to expose in client-side code — they identify your project,
// they are not secret keys. Access is controlled by your Firestore security rules instead.

export const firebaseConfig = {

  apiKey: "AIzaSyA8OmNzA_P3Xyu25_n7UQadmha08q8u7Cc",

  authDomain: "sih-collection.firebaseapp.com",

  projectId: "sih-collection",

  storageBucket: "sih-collection.firebasestorage.app",

  messagingSenderId: "399203017547",

  appId: "1:399203017547:web:285c7ab7fa8259e1ac7ece"

};


// This must exactly match the email of the user you create in
// Firebase Console > Authentication > Users (step 5 of setup).
// The password for that user is what unlocks admin.html.
export const ADMIN_EMAIL = "alokraj8a1151@gmail.com";
