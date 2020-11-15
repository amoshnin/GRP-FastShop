import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var FirebaseConfig = {
  apiKey: 'AIzaSyCMb4MQW_3cQFFRNFJCl48ZN3M0A1xq1WU',
  authDomain: 'fastshop-290022.firebaseapp.com',
  databaseURL: 'https://fastshop-290022.firebaseio.com',
  projectId: 'fastshop-290022',
  storageBucket: 'fastshop-290022.appspot.com',
  messagingSenderId: '338817416276',
  appId: '1:338817416276:web:7da18ee0774126376841c1',
  measurementId: 'G-14H0NEJ8ME',
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig);
}

export default firebase;
