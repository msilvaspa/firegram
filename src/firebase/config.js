import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyBDDx84GVdXas4vknCFi5I_6hMvgg5hVXA',
	authDomain: 'firegram-65d90.firebaseapp.com',
	databaseURL: 'https://firegram-65d90.firebaseio.com',
	projectId: 'firegram-65d90',
	storageBucket: 'firegram-65d90.appspot.com',
	messagingSenderId: '34839904751',
	appId: '1:34839904751:web:7dc73afb9338401348b61a',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
