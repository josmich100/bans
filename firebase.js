import Constants from "expo-constants";
import * as firebase from "firebase";
import "@firebase/auth";

<<<<<<< HEAD
if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
} else {
  firebase.app();
}
=======
firebase.initializeApp(Constants.manifest.extra.firebase);

>>>>>>> e22666574f7a2f2d4fb335e46b7a6e654a8fa7eb
export default firebase;
