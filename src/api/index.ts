import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1h4QjxjUXwqQt-DEuOqhaZagBpHgr5fM",
  authDomain: "my-portfolio-8bc18.firebaseapp.com",
  projectId: "my-portfolio-8bc18",
  storageBucket: "my-portfolio-8bc18.appspot.com",
  messagingSenderId: "765275409099",
  appId: "1:765275409099:web:9e076fef8d8b4a254ae94e",
  measurementId: "G-GWDJ1WR32Q",
};

let app: any;
let firestore: any;

if (firebaseConfig?.projectId) {
  app = initializeApp(firebaseConfig);
  if (app.name && typeof window !== "undefined") {
    getAnalytics(app);
  }
  firestore = getFirestore();
}

export { app, firestore };
