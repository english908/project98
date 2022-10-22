var firebaseConfig = {
    apiKey: "AIzaSyCpwl32mkG1X4FH3Zp-SPo-8pOGiyEd6uQ",
    authDomain: "kwitter-6c6bd.firebaseapp.com",
    databaseURL: "https://kwitter-6c6bd-default-rtdb.firebaseio.com",
    projectId: "kwitter-6c6bd",
    storageBucket: "kwitter-6c6bd.appspot.com",
    messagingSenderId: "236451559290",
    appId: "1:236451559290:web:af7c0a4a2f9b0bdd6c88c3"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.data().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
