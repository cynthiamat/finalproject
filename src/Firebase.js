import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    databaseURL: "https://createcard-998cb.firebaseio.com/",
    projectId: "createcard-998cb",
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;