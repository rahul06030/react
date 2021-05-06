import firebase from 'firebase/app'


const firebaseConfig = {
  apiKey: "AIzaSyB20869DGXnQ7noHX6wlDetl__q5_RXBl4",
  authDomain: "react-a55af.firebaseapp.com",
  databaseURL: "https://react-a55af-default-rtdb.firebaseio.com",
  projectId: "react-a55af",
  storageBucket: "react-a55af.appspot.com",
  messagingSenderId: "593210627829",
  appId: "1:593210627829:web:7f5d34433578f177d8d7bc"
};

const Firebase = firebase.initializeApp(firebaseConfig);
const dataBase = Firebase.database().ref('userInfo')
export default dataBase;