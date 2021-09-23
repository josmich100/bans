import Constants from "expo-constants";
import * as firebase from "firebase";
import "@firebase/auth";

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
} else {
  firebase.app();
}
export default firebase;
