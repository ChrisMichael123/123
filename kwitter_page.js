//YOUR FIREBASE LINKS
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
 username= localStorage.getItem("username");
 roomname= localStorage.getItem("room_name");
 


function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['username'];
message=message_data['message'];
like=message_data['like'];
name_tag="<h4>"+name+" <img class='user_tick'src='tick.png'></h4>";
message_tag="<h4>"+message+"</h4>";
button_tag="<button class='btn btn-warning id="+firebase_message_id+"value="+like+" onclick='redirectToRoomName(this.id)'>";
span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button>";
row=name_tag+message_tag+button_tag+span_tag;
document.getElementById("output").innerHTML=row;
//End code
      } });  }); }
getData();
function Logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");                                            
  window.location="index.html";
}
function Send(){
  msg=document.getElementById("message_input").value ;
  firebase.database().ref(roomname).push({
    username:username,
    message:msg,
    like:0
  });
  document.getElementById("message_input").innerHTML="";


























}