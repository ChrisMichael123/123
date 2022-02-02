
//ADD YOUR FIREBASE LINKS
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB7kBtoJlEzYgtnFDA3cHumZrwNfkFbPpU",
  authDomain: "kwitter-5a291.firebaseapp.com",
  databaseURL: "https://kwitter-5a291-default-rtdb.firebaseio.com",
  projectId: "kwitter-5a291",
  storageBucket: "kwitter-5a291.appspot.com",
  messagingSenderId: "239797227643",
  appId: "1:239797227643:web:8b2e61cfd9771b9b1d12de"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("username");
document.getElementById("name").innerHTML="welcome "+user_name;
function AddRoom(){
  room_name= document.getElementById("Room").value ;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
}
function Logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");                                            
  window.location="index.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_Name-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id);'>#"+Room_names+"</div> <hr>";
      document.getElementById("room_name").innerHTML=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("Room_name",name);
  window.location="kwitter_page.html";
}
